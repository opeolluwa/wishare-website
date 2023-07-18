import { ArrowDownIcon } from "@heroicons/react/24/solid";
import wiShareScreenshot from "./assets/screenshot.png";

import {
  CubeIcon,
  SignalSlashIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
function App() {
  return (
    <>
      <nav className="sm:px-10 px-2 ">
        <ul
          className="flex items-center justify-between p-4 bg-white 
      shadow-sm"
        >
          <li className="mr-auto">
            <a
              href="#"
              className="text-gray-800 font-black hover:text-gray-600"
            >
              WiShare
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Docs
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Installation
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              FAQ
            </a>
          </li>
          <li className="px-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Wiki
            </a>
          </li>
        </ul>
      </nav>
      <header className="bg-[#1D4ED8] text-white sm:px-10 px-2 sm:gap-10 py-20 sm:flex items-center relative">
        <div className="px-8 md:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl font-black  capitalize leading-none py-2">
            quickly and securely share files on PC without internet
          </h1>
          <p className="leading-8 text-gray-100 pb-6 pt-4 text-lg">
            Offline file sharing application for Windows, Linux, Mac and Android
            devices using WiFi.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-between capitalize px-8 py-4 bg-gray-800 rounded-lg text-white mt-2"
          >
            download
            <ArrowDownIcon className="w-6 h-6 pl-2" />
          </a>
        </div>
        <img
          src={wiShareScreenshot}
          alt="WiShare application screenshot"
          className="rounded-lg md:w-2/3  shadow-md shadow-gray-800 block"
        />
        <div className="custom-shape-divider-bottom-1689638420">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </header>
      <main className="md:px-10 px-8 py-20 mt-8">
        <div className="flex justify-center items-center px-20">
          <div className="flex flex-col items-center text-center justify-center w-1/3 px-10">
            <SignalSlashIcon className="w-[75px] text-red-600 mb-2 block text-center" />
            <h2 className="text-2xl font-black capitalize leading-none py-2">
              No Internet
            </h2>
            <p className="leading-6 text-lg text-gray-400 w-2/3">
              WiShare requires no internet connection to work properly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center w-1/3">
            <UsersIcon className="w-[75px] text-yellow-500 mb-2 block text-center" />
            <h2 className="text-2xl font-black capitalize leading-none py-2">
              Open Source
            </h2>
            <p className="leading-6 text-lg text-gray-400 w-2/3">
              WiShare is an open source project. You can check out the
              <a
                className="text-app underline pl-2"
                href="https://https://github.com/wishare"
              >
                source
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center text-center justify-center w-1/3">
            <CubeIcon className="w-[75px] mb-2 block text-center text-green-600 bg-red-10 p-2 rounded" />
            <h2 className="text-2xl font-black capitalize leading-none py-2">
              Cross Platform
            </h2>
            <p className="leading-6 text-lg text-gray-400 w-2/3">
              WiShare is available for Windows, Linux, Mac and Android devices.
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex hidden justify-center py-20 md:px-10 px-8">
          <img
            src={wiShareScreenshot}
            alt="WiShare application screenshot"
            className="rounded-lg md:w-2/3  shadow block"
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
