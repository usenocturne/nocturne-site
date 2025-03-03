import { NextResponse } from 'next/server'

const repos = ['usenocturne/nocturne-ui', 'usenocturne/nocturne-image']
const manualContributors = ['Jenner Gray']

interface BuyMeACoffeeSponsor {
  payer_name: string
  amount: number
  support_created_on: string
}

interface BuyMeACoffeeResponse {
  data: BuyMeACoffeeSponsor[]
  current_page: number
  last_page: number
}

interface SponsorsResponse {
  developers: string[]
  contributors: string[]
  sponsors: string[]
}

interface GitHubPullRequest {
  user: {
    login: string
  }
  merged_at: string | null
}

const fetchWithTimeout = async (
  url: string,
  options: RequestInit,
  timeout = 5000,
) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

async function fetchGitHubContributors(): Promise<string[]> {
  try {
    const allPRs = await Promise.all(
      repos.map(async (repo) => {
        const response = await fetchWithTimeout(
          `https://api.github.com/repos/${repo}/pulls?state=closed&per_page=100`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          },
          5000,
        )

        if (!response.ok) {
          throw new Error(
            `Failed to fetch PRs from ${repo}: ${response.status}`,
          )
        }

        const pulls: GitHubPullRequest[] = await response.json()
        return pulls
          .filter((pr) => pr.merged_at !== null)
          .map((pr) => pr.user.login)
      }),
    )

    const excludedUsernames = [
      '68p',
      'BBaoVanC',
      'itsnebulalol',
      'brandonsaldan',
      'bot',
      'dependabot',
      'bbaovanc',
      'DominicFrye',
      'shadow',
    ]

    const allContributors = [
      ...Array.from(new Set(allPRs.flat())),
      ...manualContributors,
    ]

    const uniqueContributors = Array.from(new Set(allContributors))
      .filter(
        (name) =>
          !excludedUsernames.some(
            (excluded) => name.toLowerCase() === excluded.toLowerCase(),
          ) && !name.toLowerCase().includes('bot'),
      )
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

    return uniqueContributors
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching GitHub contributors:', error.message)
    }

    return manualContributors.sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase()),
    )
  }
}

async function fetchBuyMeACoffeePage(
  page: number,
): Promise<BuyMeACoffeeResponse> {
  const response = await fetchWithTimeout(
    `https://developers.buymeacoffee.com/api/v1/supporters?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BUYMEACOFFEE_ACCESS_TOKEN}`,
      },
    },
    5000,
  )

  if (!response.ok) {
    throw new Error(
      `Failed to fetch from Buy Me a Coffee API: ${response.status}`,
    )
  }

  return response.json()
}

async function fetchBuyMeACoffeeSponsors(): Promise<string[]> {
  try {
    const firstPage = await fetchBuyMeACoffeePage(1)

    const allPages = await Promise.all(
      Array.from({ length: firstPage.last_page }, (_, i: number) => {
        const pageNum = i + 1
        return fetchBuyMeACoffeePage(pageNum)
      }),
    )

    const allSponsors: string[] = allPages.flatMap((page) =>
      page.data
        .map((supporter: BuyMeACoffeeSponsor) => supporter.payer_name)
        .filter((name: string) => {
          const unwantedNames = ['Someone', 'Anonymous', '']
          return (
            !unwantedNames.includes(name) &&
            name.trim() !== '' &&
            name.toLowerCase() !== 'anonymous'
          )
        }),
    )

    return Array.from(new Set(allSponsors))
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching from Buy Me a Coffee:', error.message)
    }
    return []
  }
}

function getKofiSponsors(): string[] {
  const kofiSponsorsEnv = process.env.KOFI_SPONSORS
  if (!kofiSponsorsEnv) {
    return []
  }

  return kofiSponsorsEnv
    .split(',')
    .map((name: string) => name.trim())
    .filter((name: string) => name !== '')
}

export async function GET(): Promise<NextResponse<SponsorsResponse>> {
  const debug: any = {
    envVars: {
      hasGithubToken: !!process.env.GITHUB_TOKEN,
      hasBuyMeACoffeeToken: !!process.env.BUYMEACOFFEE_ACCESS_TOKEN,
      hasKofiSponsors: !!process.env.KOFI_SPONSORS,
    },
    apiResults: {
      github: null,
      buyMeACoffee: null,
      kofi: null,
    },
    errors: [],
  }

  try {
    const developers = ['Brandon Saldan', 'bbaovanc', 'Dominic Frye', 'shadow']

    let buyMeACoffeeSponsors: string[] = []
    try {
      buyMeACoffeeSponsors = await fetchBuyMeACoffeeSponsors()
      debug.apiResults.buyMeACoffee = `Success: Found ${buyMeACoffeeSponsors.length} sponsors`
    } catch (error) {
      debug.apiResults.buyMeACoffee = `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      debug.errors.push(
        `BuyMeACoffee Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }

    let kofiSponsors: string[] = []
    try {
      kofiSponsors = getKofiSponsors()
      debug.apiResults.kofi = `Success: Found ${kofiSponsors.length} sponsors`
    } catch (error) {
      debug.apiResults.kofi = `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      debug.errors.push(
        `Kofi Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }

    let contributors: string[] = []
    try {
      contributors = await fetchGitHubContributors()
      debug.apiResults.github = `Success: Found ${contributors.length} contributors`
    } catch (error) {
      debug.apiResults.github = `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      debug.errors.push(
        `GitHub Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }

    const allSponsors = Array.from(
      new Set(
        [...buyMeACoffeeSponsors, ...kofiSponsors].map((name) =>
          name.toLowerCase(),
        ),
      ),
    )
      .map((lowerName) => {
        const original = [...buyMeACoffeeSponsors, ...kofiSponsors].find(
          (name) => name.toLowerCase() === lowerName,
        )
        return original || lowerName
      })
      .sort((a: string, b: string) => a.localeCompare(b))

    const response: SponsorsResponse & { debug?: any } = {
      developers,
      contributors,
      sponsors: allSponsors,
      debug,
    }

    return new NextResponse(JSON.stringify(response, null, 2), {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error: unknown) {
    debug.errors.push(
      `Main Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )

    return NextResponse.json(
      {
        developers: [],
        contributors: [],
        sponsors: [],
        debug,
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  }
}
