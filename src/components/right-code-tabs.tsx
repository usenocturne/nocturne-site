import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { FaPython } from 'react-icons/fa'
import { RiMarkdownFill } from 'react-icons/ri'

const CodeBlock = dynamic(() => import('@/components/code-block'), {
  ssr: false,
})

type TabKey = 'setup' | 'readme'

interface TabContent {
  title: string
  code: string
}

interface TabsData {
  setup: TabContent
  readme: TabContent
}

const RightCodeTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('readme')
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
    setup: {
      title: 'setup_hotspot.py',
      code: `def setup_hotspot():
    # Check if WiFi is available
    wifi_status = check_wifi_status()
    if not wifi_status:
        print("Error: WiFi hardware not detected")
        return False
        
    # Create hotspot configuration
    config = {
        "ssid": "Car_Thing_Setup",
        "wpa_passphrase": generate_password(),
        "ip_range": "192.168.4.0/24"
    }
    
    # Apply configuration
    success = apply_hotspot_config(config)
    if not success:
        print("Error: Failed to configure hotspot")
        return False
        
    # Start hotspot service
    if start_hotspot_service():
        print("Hotspot started successfully")
        print(f"SSID: {config['ssid']}")
        print(f"Password: {config['wpa_passphrase']}")
        return True
    else:
        print("Error: Failed to start hotspot")
        return False`,
    },
    readme: {
      title: 'README.md',
      code: `# Car Thing Setup Guide

1. Download superbird-tool and run the setup process detailed here.

2. Download and unzip the latest image from Releases.

3. Connect Car Thing to your computer in USB Mode:
   - Hold preset buttons 1 and 4 while connecting
   - Wait for device recognition

4. Open your command line and run:

   # Go into the superbird-tool repository
   $ cd C:\\path\\to\\superbird-tool-main

   # Find device
   $ python superbird_tool.py --find_device

   # Flash the new image
   $ python superbird_tool.py --flash path/to/nocturne.img

5. Wait for the process to complete.
   Do not disconnect the device during flashing.`,
    },
  }

  return (
    <div className="relative px-6 pt-8 md:pl-0">
      <div className="mx-auto h-72 max-w-2xl overflow-hidden bg-texture-2 bg-cover md:mx-0 md:max-w-none">
        <div className="relative w-full overflow-hidden rounded-tr-xl bg-white/60 shadow-sm backdrop-blur-xl">
          <div className="absolute inset-0 rounded-tr-xl border-r-4 border-gray-50" />
          <div className="relative flex bg-gray-50">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-600">
              <div
                onClick={() => handleTabChange('setup')}
                className="relative cursor-pointer"
              >
                <div
                  className={
                    activeTab === 'setup'
                      ? 'rounded-tl-xl border-r border-t-4 border-l-gray-50 border-r-gray-200 border-t-gray-50 bg-white px-4 py-2 text-blue-600'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2 hover:text-gray-900'
                  }
                >
                  <div className="flex items-center gap-2">
                    <FaPython className="size-4" />
                    {tabs.setup.title}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    activeTab === 'setup' ? 'bg-blue-500' : 'bg-transparent'
                  }`}
                />
              </div>
              <div
                onClick={() => handleTabChange('readme')}
                className="relative cursor-pointer"
              >
                <div
                  className={
                    activeTab === 'readme'
                      ? 'rounded-tr-xl border-t-4 border-l-gray-200 border-r-gray-50 border-t-gray-50 bg-white px-4 py-2 text-blue-600'
                      : 'border-r border-t-4 border-gray-200 border-t-gray-50 px-4 py-2 hover:text-gray-900'
                  }
                >
                  <div className="flex items-center gap-2">
                    <RiMarkdownFill className="size-4" />
                    {tabs.readme.title}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    activeTab === 'readme' ? 'bg-blue-500' : 'bg-transparent'
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

export default RightCodeTabs
