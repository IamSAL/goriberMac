import Image from "next/image"
import React from "react"
import { Dock } from "../../core/components"
// import IconSearch from '/src/assets/icons/System/Search.svg';
import IconControl from "src/assets/icons/System/Control.svg"
import { apps } from "src/misc/placeholder-data/apps"
import AppLauncher from "../../core/components/common/AppLauncher"

const LaunchPad = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image
        src="/static/images/wallpapers/dark.svg"
        className="w-full h-full blur-lg absolute top-0 bottom-0 scale-125 z-10"
        alt="launchpad-bg"
        width={100}
        height={100}
      />
      <div className="w-full h-full blur-lg absolute top-0 bottom-0 bg-black bg-opacity-50 scale-125 z-10"></div>

      <div id="content" className="absolute top-0 left-0 w-full h-full z-20">
        <div className="flex justify-center w-full my-12">
          <form className="flex items-center">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <IconControl /> */}
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-500 border border-gray-600 text-sm rounded-lg text-white block w-full pl-10 p-2 bg-opacity-25 h-8"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="apps grid gap-10 grid-cols-7">
          {apps.map((app, idx) => {
            return (
              <AppLauncher key={app.id} appId={app.id}>
                <div
                  className="flex flex-col justify-center items-center gap-2 text-center "
                  key={app.id}
                >
                  <Image src={app.icon} width={75} height={75} alt={app.name} />
                  <h4 className="text-white font-light text-sm">{app.name}</h4>
                </div>
              </AppLauncher>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LaunchPad
