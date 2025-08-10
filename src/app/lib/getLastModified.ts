const REPOS = ['usenocturne/nocturne-ui', 'usenocturne/nocturne']

export async function getLatestCommitDate() {
  try {
    const dates = await Promise.all(
      REPOS.map(async (repo) => {
        const response = await fetch(
          `https://api.github.com/repos/${repo}/commits/main`,
          {
            next: { revalidate: 3600 },
            headers: {
              Accept: 'application/vnd.github.v3+json',
              ...(process.env.GITHUB_TOKEN && {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              }),
            },
          },
        )

        if (!response.ok) {
          console.error(`Failed to fetch ${repo}:`, response.statusText)
          return null
        }

        const data = await response.json()
        return new Date(data.commit.committer.date)
      }),
    )

    const validDates = dates.filter((date): date is Date => date !== null)
    if (validDates.length === 0) {
      return new Date().toISOString().split('T')[0]
    }

    const latestTimestamp = Math.max(
      ...validDates.map((date) => date.getTime()),
    )
    const latestDate = new Date(latestTimestamp)

    const formattedDate = latestDate.toISOString().split('T')[0]
    return formattedDate
  } catch (error) {
    console.error('Error fetching commit dates:', error)
    const today = new Date().toISOString().split('T')[0]
    return today
  }
}
