import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { FaJsSquare, FaReact } from 'react-icons/fa'

const CodeBlock = dynamic(() => import('@/components/code-block'), {
  ssr: false,
})

type TabKey = 'playlist' | 'artist'

interface TabContent {
  title: string
  code: string
}

interface TabsData {
  playlist: TabContent
  artist: TabContent
}

const LeftCodeTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('playlist')
  const [isMounted, setIsMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleTabChange = (newTab: TabKey) => {
    if (newTab === activeTab) return

    setIsChanging(true)
    setTimeout(() => {
      setActiveTab(newTab)
      setIsChanging(false)
    }, 150)
  }

  const tabs: TabsData = {
    playlist: {
      title: 'playlistService.js',
      code: `export const fetchUserPlaylists = async (
  accessToken,
  setPlaylists,
  updateGradientColors,
  handleError
) => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      const validPlaylists = data.items.filter((item) => item && item.id);
      if (validPlaylists.length > 0) {
        const imageUrl = validPlaylists[0].images?.[0]?.url;
        if (imageUrl) {
          localStorage.setItem("libraryImage", imageUrl);
          updateGradientColors(imageUrl, "library");
        }
      }
      setPlaylists(validPlaylists);
    } else {
      console.error("Error fetching user playlists:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user playlists:", error.message);
  }
};`,
    },
    artist: {
      title: 'AuthSelection.jsx',
      code: `const enableBluetoothDiscovery = async () => {
  try {
    setIsBluetoothDiscovering(true);
    const response = await fetch(
      "http://localhost:5000/bluetooth/discover/on",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to enable bluetooth discovery");
    }

    setTimeout(() => {
      setIsBluetoothDiscovering(false);
      fetch("http://localhost:5000/bluetooth/discover/off", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch(console.error);
    }, 120000);
  } catch (error) {
    console.error("Error enabling bluetooth discovery:", error);
    setIsBluetoothDiscovering(false);
  }
};`,
    },
  }

  return (
    <div className="relative px-6 pt-8 md:pr-0">
      <div className="mx-auto h-72 max-w-2xl overflow-hidden rounded-tl-xl border-none bg-white bg-light-texture-1 bg-cover shadow-[0_0_1px_1px_rgba(0,0,0,0.05)] outline-none ring-1 ring-black/5 md:mx-0 md:max-w-none dark:bg-zinc-900 dark:bg-dark-texture-1 dark:shadow-[0_0_1px_1px_rgba(255,255,255,0.1)] dark:ring-white/10">
        <div className="relative w-full overflow-hidden rounded-tl-xl shadow-sm">
          <div className="absolute inset-0 rounded-tl-xl bg-white/60 backdrop-blur-xl dark:bg-zinc-900/60" />
          <div className="absolute inset-0 rounded-tl-xl border-l-4 border-gray-50 dark:border-zinc-800" />
          <div className="relative flex bg-gray-50 dark:bg-zinc-800">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-600 dark:text-gray-400">
              <div
                onClick={() => handleTabChange('playlist')}
                className="relative cursor-pointer"
              >
                <div
                  className={
                    activeTab === 'playlist'
                      ? 'rounded-tl-xl border-l-4 border-r border-t-4 border-l-gray-50 border-r-gray-200 border-t-gray-50 bg-white px-4 py-2 text-blue-600 dark:border-l-zinc-800 dark:border-r-zinc-700 dark:border-t-zinc-800 dark:bg-zinc-900'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 py-2 pl-5 pr-4 transition duration-150 ease-in-out hover:text-gray-900 dark:border-zinc-700 dark:border-t-zinc-800 dark:hover:text-white'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaJsSquare className="size-4" />
                    {tabs.playlist.title}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    activeTab === 'playlist' ? 'bg-blue-500' : 'bg-transparent'
                  }`}
                />
              </div>
              <div
                onClick={() => handleTabChange('artist')}
                className="relative cursor-pointer"
              >
                <div
                  className={
                    activeTab === 'artist'
                      ? 'rounded-tr-xl border-t-4 border-l-gray-200 border-r-gray-50 border-t-gray-50 bg-white px-4 py-2 text-blue-600 dark:border-l-zinc-700 dark:border-r-zinc-800 dark:border-t-zinc-800 dark:bg-zinc-900'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2 transition duration-150 ease-in-out hover:text-gray-900 dark:border-zinc-700 dark:border-t-zinc-800 dark:hover:text-white'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaReact className="size-4" />
                    {tabs.artist.title}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    activeTab === 'artist' ? 'bg-blue-500' : 'bg-transparent'
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            {isMounted && (
              <div
                className={`min-h-[200px] transform transition-all duration-300 ease-in-out ${
                  isChanging ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                }`}
              >
                <CodeBlock code={tabs[activeTab].code} activeTab={activeTab} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftCodeTabs
