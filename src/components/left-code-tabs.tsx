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
      <div className="mx-auto h-72 max-w-2xl overflow-hidden bg-texture-1 bg-cover md:mx-0 md:max-w-none">
        <div className="relative w-screen overflow-hidden rounded-tl-xl bg-white/60 shadow-sm backdrop-blur-xl">
          <div className="absolute inset-0 rounded-tl-xl border-l-4 border-gray-50" />
          <div className="relative flex bg-gray-50">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-600">
              <div
                onClick={() => handleTabChange('playlist')}
                className="relative cursor-pointer"
              >
                <div
                  className={
                    activeTab === 'playlist'
                      ? 'rounded-tl-xl border-l-4 border-r border-t-4 border-l-gray-50 border-r-gray-200 border-t-gray-50 bg-white px-4 py-2 text-blue-600'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 py-2 pl-5 pr-4 transition duration-150 ease-in-out hover:text-gray-900'
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
                      ? 'rounded-tr-xl border-t-4 border-l-gray-200 border-r-gray-50 border-t-gray-50 bg-white px-4 py-2 text-blue-600'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2 transition duration-150 ease-in-out hover:text-gray-900'
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
                <CodeBlock code={tabs[activeTab].code} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftCodeTabs
