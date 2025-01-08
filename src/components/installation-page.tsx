'use client'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { SectionLink } from '@/components/section-link'
import { Heading, SectionTitle, SubSectionTitle } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

function Hero() {
  return (
    <div className="relative dark:bg-zinc-950">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 sm:h-[35rem] dark:ring-white/10" />
      <Container className="relative px-8 sm:px-0">
        <Navbar
          banner={
            <Link
              href="https://github.com/usenocturne/nocturne-image"
              className="duration-350 flex items-center gap-1 rounded-full bg-gray-950/40 px-3 py-0.5 text-sm/6 font-medium text-white transition ease-in-out data-[hover]:bg-gray-950/30"
            >
              Nocturne Public Beta Now Available
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-2 sm:pt-24">
          <h1 className="font-display text-balance text-head/[0.9] font-medium leading-[50px] tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Installation Guide
          </h1>
          <p className="mt-4 max-w-2xl pb-12 text-xl/7 font-medium text-white/90 sm:mt-8 sm:pb-32 sm:text-2xl/8">
            Whether you're a tech enthusiast or just getting started, we'll walk
            you through every step of the process.
          </p>
        </div>
      </Container>
    </div>
  )
}

function InstallationGuide() {
  return (
    <Container>
      <div className="prose prose-lg mx-auto max-w-7xl prose-h2:!mt-10 [&>*]:text-gray-800 dark:[&>*]:text-white [&>div>h2]:!mb-6 [&>h2.text-2xl]:!mt-3 [&>h2.text-3xl]:!mt-12 sm:[&>h2.text-4xl]:!mt-20 [&>h2]:mb-6">
        <Heading as="h2">Prerequisites</Heading>
        <p className="dark:text-gray-300">
          Unless receiving power through a Linux computer, running Nocturne on
          your Car Thing requires a host device such as a Raspberry Pi, a
          microSD card, a microUSB to USB-C cable, a microUSB/your power
          source's connector, as well as a Spotify Premium account. You will
          also need{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            superbird-tool
          </a>{' '}
          to flash the image regardless of your computer's operating system.
        </p>

        <Heading as="h2">Installation</Heading>
        <p className="dark:text-gray-300">
          Installing Nocturne differs slightly depending on your operating
          system.
        </p>

        <SectionLink id="windows">
          <SectionTitle as="h2">Windows</SectionTitle>
        </SectionLink>
        <SubSectionTitle as="h2">Raspberry Pi Setup</SubSectionTitle>
        <p className="dark:text-gray-300">
          Download and open{' '}
          <a
            href="https://downloads.raspberrypi.org/imager/imager_latest.exe"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Raspberry Pi Imager
          </a>
          , select Raspberry Pi OS (Legacy, 64-bit) Lite, select "Edit
          Settings", check "Set hostname", check "Set username and password"
          (set a password), check "Configure wireless LAN", (enter your
          network's SSID and password), check "Set local settings". Open the
          Services tab, enable SSH, and use password authentication. Write the
          configured OS to your microSD card and insert it into your Raspberry
          Pi.
        </p>

        <SubSectionTitle as="h2">Flashing Process</SubSectionTitle>
        <p className="dark:text-gray-300">
          If you haven't already, download{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            superbird-tool
          </a>{' '}
          and run the setup process detailed{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool?tab=readme-ov-file#supported-platforms"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          .
        </p>
        <p className="dark:text-gray-300">
          Download and unzip the latest image from{' '}
          <a
            href="https://github.com/brandonsaldan/nocturne-image/releases"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Releases
          </a>
          , connect Car Thing to your computer in USB Mode (hold preset buttons
          1 and 4 while connecting), and run the following from your command
          line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the superbird-tool repository
$ cd C:\\path\\to\\superbird-tool-main

# Find device
$ python superbird_tool.py --find_device

# Flash Nocturne image, without resetting the data partition 
$ python superbird_tool.py --dont_reset --restore_device C:\\path\\to\\nocturne-image\\image`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          After the flashing completes, connect your Raspberry Pi to your
          computer, and change directories to the scripts folder.
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the setup-scripts folder
$ cd \\path\\to\\nocturne-image\\setup-scripts`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          There are two different ways to use Nocturne. You can either use it at
          your desk, or in your car.
        </p>

        <SubSectionTitle as="h2">
          Using Nocturne at your desk (Windows)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          Connect your Car Thing to the Raspberry Pi and run the following from
          your command line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_host_rpi.sh to Raspberry Pi
$ scp \\path\\to\\nocturne-image\\setup-scripts\\setup_host_rpi.sh pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Make setup_host_rpi.sh executable
$ chmod +x /home/pi/setup_host_rpi.sh

# Execute setup_host_rpi.sh
$ sudo ./setup_host_rpi.sh

# Reboot Raspberry Pi
$ sudo reboot`}
          </code>
        </pre>

        <SubSectionTitle as="h2">
          Using Nocturne in your car (Windows)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          Connect your Car Thing to the Raspberry Pi and run the following from
          your command line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_host_rpi.sh to Raspberry Pi
$ scp \\path\\to\\nocturne-image\\setup-scripts\\setup_host_rpi.sh pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Make setup_host_rpi.sh executable
$ chmod +x /home/pi/setup_host_rpi.sh

# Execute setup_host_rpi.sh
$ sudo ./setup_host_rpi.sh

# Reboot Raspberry Pi
$ sudo reboot`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          For car usage, you will also need to run the setup_hotspot.py script:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_hotspot.py to Raspberry Pi
$ scp \\path\\to\\nocturne-image\\setup-scripts\\setup_hotspot.py pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Execute setup_hotspot.py
$ sudo python3 ./setup_hotspot.py`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          The script will ask you to input the name of your hotspot, as well as
          the password for the hotspot. After the script completes, Nocturne is
          almost ready to be used in your car!
        </p>

        <SectionLink id="macos">
          <SectionTitle as="h2">macOS</SectionTitle>
        </SectionLink>
        <SubSectionTitle as="h2">Raspberry Pi Setup</SubSectionTitle>
        <p className="dark:text-gray-300">
          Download and open{' '}
          <a
            href="https://downloads.raspberrypi.org/imager/imager_latest.dmg"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Raspberry Pi Imager
          </a>
          , select Raspberry Pi OS (Legacy, 64-bit) Lite, select "Edit
          Settings", check "Set hostname", check "Set username and password"
          (set a password), check "Configure wireless LAN", (enter your
          network's SSID and password), check "Set local settings". Open the
          Services tab, enable SSH, and use password authentication. Write the
          configured OS to your microSD card and insert it into your Raspberry
          Pi.
        </p>

        <SubSectionTitle as="h2">Flashing Process</SubSectionTitle>
        <p className="dark:text-gray-300">
          If you haven't already, download{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            superbird-tool
          </a>{' '}
          and run the setup process detailed{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool?tab=readme-ov-file#supported-platforms"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          .
        </p>

        <p className="dark:text-gray-300">
          Download and unzip the latest image from{' '}
          <a
            href="https://github.com/brandonsaldan/nocturne-image/releases"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Releases
          </a>
          , connect Car Thing to your computer in USB Mode (hold preset buttons
          1 and 4 while connecting), and run the following from your command
          line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the superbird-tool repository
$ cd /path/to/superbird-tool-main

# Find device
$ /opt/homebrew/bin/python3 superbird_tool.py --find_device

# Flash Nocturne image, without resetting the data partition 
$ /opt/homebrew/bin/python3 superbird_tool.py --dont_reset --restore_device /path/to/nocturne-image/image`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          After the flashing completes, connect your Raspberry Pi to your
          computer, and change directories to the scripts folder:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the setup-scripts folder
$ cd /path/to/nocturne-image/setup-scripts`}
          </code>
        </pre>

        <SubSectionTitle as="h2">
          Using Nocturne at your desk (macOS)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          Connect your Car Thing to the Raspberry Pi and run the following from
          your command line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_host_rpi.sh to Raspberry Pi
$ scp /path/to/nocturne-image/setup-scripts/setup_host_rpi.sh pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Make setup_host_rpi.sh executable
$ chmod +x /home/pi/setup_host_rpi.sh

# Execute setup_host_rpi.sh
$ sudo ./setup_host_rpi.sh

# Reboot Raspberry Pi
$ sudo reboot`}
          </code>
        </pre>

        <SubSectionTitle as="h2">
          Using Nocturne in your car (macOS)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          Connect your Car Thing to the Raspberry Pi and run the following from
          your command line:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_host_rpi.sh to Raspberry Pi
$ scp /path/to/nocturne-image/setup-scripts/setup_host_rpi.sh pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Make setup_host_rpi.sh executable
$ chmod +x /home/pi/setup_host_rpi.sh

# Execute setup_host_rpi.sh
$ sudo ./setup_host_rpi.sh

# Reboot Raspberry Pi
$ sudo reboot`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          For car usage on macOS, you will also need to run the setup_hotspot.py
          script:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_hotspot.py to Raspberry Pi
$ scp /path/to/nocturne-image/setup-scripts/setup_hotspot.py pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Execute setup_hotspot.py
$ sudo python3 ./setup_hotspot.py`}
          </code>
        </pre>

        <SectionLink id="linux">
          <SectionTitle as="h2">Linux</SectionTitle>
        </SectionLink>
        <p className="dark:text-gray-300">
          A Raspberry Pi is not required on Linux, unless you want to use
          Nocturne in your car.
        </p>

        <SubSectionTitle as="h2">Raspberry Pi Setup</SubSectionTitle>
        <p className="dark:text-gray-300">
          Download and open{' '}
          <a
            href="https://downloads.raspberrypi.org/imager/imager_latest.dmg"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Raspberry Pi Imager
          </a>
          , select Raspberry Pi OS (Legacy, 64-bit) Lite, select "Edit
          Settings", check "Set hostname", check "Set username and password"
          (set a password), check "Configure wireless LAN", (enter your
          network's SSID and password), check "Set local settings". Open the
          Services tab, enable SSH, and use password authentication. Write the
          configured OS to your microSD card and insert it into your Raspberry
          Pi.
        </p>

        <SubSectionTitle as="h2">Flashing Process</SubSectionTitle>
        <p className="dark:text-gray-300">
          If you haven't already, download{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            superbird-tool
          </a>{' '}
          and run the setup process detailed{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool?tab=readme-ov-file#supported-platforms"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          .
        </p>

        <p className="dark:text-gray-300">
          Download and unzip the latest image from{' '}
          <a
            href="https://github.com/brandonsaldan/nocturne-image/releases"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Releases
          </a>
          , connect Car Thing to your computer in USB Mode (hold preset buttons
          1 and 4 while connecting), and run the following from your command
          line:
        </p>

        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the superbird-tool repository
$ cd /path/to/superbird-tool-main

# Find device
$ sudo python3 ./superbird_tool.py --find_device

# Flash Nocturne image, without resetting the data partition 
$ sudo python3 ./superbird_tool.py --dont_reset --restore_device /path/to/nocturne-image/image`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          After the flashing completes, unplug and replug your Car Thing, and
          change directories to the scripts folder:
        </p>

        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Go into the setup-scripts folder
$ cd /path/to/nocturne-image/setup-scripts`}
          </code>
        </pre>

        <SubSectionTitle as="h2">
          Using Nocturne at your desk (Linux)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          At this point, there are two different scripts that you can use. The
          first one,{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            setup_host_apt.sh
          </code>
          , is used on Linux distros that utilize apt as it's package manager.
          The second one,{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            setup_host_pacman.sh
          </code>
          , is used on Linux distros that utilize Pacman as it's package
          manager. If you use Pacman, replace
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            setup_host_apt.sh
          </code>{' '}
          in the following commands with
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            setup_host_pacman.sh
          </code>{' '}
          to continue with setup.
        </p>
        <p className="dark:text-gray-300">
          It is important to note that{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            setup_host_pacman.sh
          </code>{' '}
          has not been tested very well, so it may not work as intended for
          setup.
        </p>

        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Make setup_host_apt.sh executable
$ chmod +x setup_host_apt.sh

# Execute setup_host_apt.sh
$ sudo ./setup_host_apt.sh`}
          </code>
        </pre>

        <SubSectionTitle as="h2">
          Using Nocturne in your car (Linux)
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          To use Nocturne in your car, you will need to have a Raspberry Pi to
          provide network.
        </p>
        <p className="dark:text-gray-300">
          Connect your Raspberry Pi to your computer, your Car Thing to the
          Raspberry Pi, and run the following from your command line:
        </p>

        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`# Transfer setup_host_rpi.sh to Raspberry Pi
$ scp /path/to/nocturne-image/setup-scripts/setup_host_rpi.sh pi@raspberrypi.local:/home/pi/

# SSH into Raspberry Pi
$ ssh pi@raspberrypi.local

# Make setup_host_rpi.sh executable
$ chmod +x /home/pi/setup_host_rpi.sh

# Execute setup_host_rpi.sh
$ sudo ./setup_host_rpi.sh

# Reboot Raspberry Pi
$ sudo reboot`}
          </code>
        </pre>

        <p className="dark:text-gray-300">
          Continue setting up Nocturne by following the steps outlined{' '}
          <a
            href="https://github.com/usenocturne/nocturne-ui?tab=readme-ov-file#spotify-developer-setup"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          . Then, select Login with Phone, scan the QR Code, and enter the
          Client ID and the Client Secret, and login to Spotify. After logging
          in, you are ready to use Nocturne!
        </p>

        <SectionLink id="troubleshooting">
          <Heading as="h2">Troubleshooting</Heading>
        </SectionLink>

        <SubSectionTitle as="h2">
          superbird-tool: USBTimeoutError
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          If you are running into this error while flashing your Car Thing, try
          using the option{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            --slow_burn
          </code>{' '}
          or{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            --slower_burn
          </code>{' '}
          in the command used to flash.
        </p>
        <p className="dark:text-gray-300">This will look like the following:</p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`$ python ./superbird_tool.py --dont_reset --slow_burn --restore_device /path/to/nocturne/image`}
          </code>
        </pre>
        <p className="dark:text-gray-300">
          If this still does not resolve the error, then you will have to edit
          line 164 (the one that says{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            MULTIPLIER = 8
          </code>
          ) in{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            superbird_device.py
          </code>
        </p>
        <p className="dark:text-gray-300">
          If your flashing is failing at{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            executing bulkcmd: "amlmmc part 1"
          </code>
          , then try running the following command manually. This may take a few
          tries to succeed:
        </p>
        <pre className="rounded-lg bg-gray-100 p-4 dark:bg-zinc-900">
          <code className="language-bash text-gray-800 dark:text-white">
            {`$ python ./superbird_tool.py --bulkcmd "amlmmc part 1"`}
          </code>
        </pre>
        <p className="dark:text-gray-300">
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            python
          </code>{' '}
          in the above commands depends on what OS you are running:
        </p>
        <ul className="list-disc pl-6">
          <li className="dark:text-gray-300">
            For Windows, it will be{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
              python
            </code>
          </li>
          <li className="dark:text-gray-300">
            For macOS, it will be{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
              /opt/homebrew/bin/python3
            </code>
          </li>
          <li className="dark:text-gray-300">
            For Linux, it will be{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
              python3
            </code>
          </li>
        </ul>

        <SubSectionTitle as="h2">
          superbird-tool: "bulkcmd timed out or failed!" after system_b
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          If you are running into this error while flashing your Car Thing, you
          must replace the{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            superbird_partitions.py
          </code>{' '}
          file in the
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            superbird-tool
          </code>{' '}
          folder with the one provided in this repo.
        </p>
        <p className="dark:text-gray-300">
          This error occurs since some devices have a smaller data partition,
          causing the error when attempting to flash the data partition.
        </p>

        <SubSectionTitle as="h2">
          superbird-tool: AssertionError
        </SubSectionTitle>
        <p className="dark:text-gray-300">
          If you are running into this error while flashing your Car Thing, you
          must install the{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            libusbk
          </code>{' '}
          driver in Zadig. You can do this with the steps found{' '}
          <a
            href="https://github.com/thinglabsoss/superbird-tool?tab=readme-ov-file#windows"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          , and replacing{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            libusb-win32
          </code>{' '}
          with{' '}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800 dark:bg-zinc-900 dark:text-white">
            libusbk
          </code>{' '}
          instead.
        </p>

        <p className="dark:text-gray-300">
          If your issue is not listed here, or if you need help, join our{' '}
          <a
            href="https://discord.gg/GTP9AawHPt"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Discord server
          </a>{' '}
          for assistance.
        </p>

        <SectionLink id="download">
          <Heading as="h2">Download</Heading>
        </SectionLink>
        <p className="dark:text-gray-300">
          You can download the latest flashable version of Nocturne for Windows,
          macOS and Linux{' '}
          <a
            href="https://github.com/brandonsaldan/nocturne-image/releases/latest"
            className="duration-350 text-blue-600 no-underline transition ease-in-out hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            here
          </a>
          .
        </p>
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-zinc-950">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 pb-20 dark:from-zinc-950 dark:from-50% dark:to-zinc-950">
          <InstallationGuide />
        </div>
      </main>
      <Footer />
    </div>
  )
}
