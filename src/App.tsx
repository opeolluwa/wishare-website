import { ArrowDownIcon } from "@heroicons/react/24/solid";
import screenshotSrc from "./assets/screenshot.png";
function App() {
  return (
    <>
      <header className="flex items-center justify-center px-12 py-10 mt-4 w-full gap-10">
        <div>
          <h1 className="text-3xl font-bold capitalize leading-10 py-2">
            quickly and securely share files without internet
          </h1>
          <p className="leading-8 text-gray-500 pb-4 text-lg">
            Offline file sharing application for Windows, Linux, Mac and Android
            devices using WiFi.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-between capitalize px-4 py-2 bg-app rounded text-white mt-2"
          >
            download
            <ArrowDownIcon className="w-6 h-6 pl-2" />
          </a>
        </div>
        <div className="">
          <img
            src={screenshotSrc}
            alt="wishare application screenshot"
            className="rounded-sm w-2/3 shadow-lg"
          />
        </div>
      </header>
      <main className="bg-app-50 px-10 py-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi officia sint fugit quam minus harum omnis temporibus earum incidunt id veritatis, debitis deserunt quae a magni quo, optio est saepe!

      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
