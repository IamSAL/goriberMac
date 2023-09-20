import React, { useState } from "react"
import AppLauncher from "src/core/components/common/AppLauncher"
import { apps } from "src/misc/placeholder-data/apps"
import Image from "next/image"
import { Search } from "lucide-react"
import { cn } from "@utils"
const WidgetsSearchForm = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const [selectedAppId, setselectedAppId] = useState<number>()
  return <div className=" p-8">
    <div className="">
      <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-50">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} />
          </div>
          <input
            type="text"
            id="voice-search"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value || "")}
            className="bg-gray-500 border border-gray-600 text-sm rounded-lg text-white block w-full pl-10 p-2 bg-opacity-25 h-8"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
    <div className="flex flex-col gap-2 mt-12 pl-4">


      {apps.filter(app => app.name.toLowerCase().includes(searchTerm?.toLowerCase())).map((app, idx) => {
        return (

          <div key={app.id} onClick={() => setselectedAppId(app.id)} className={cn("Item1 cursor-pointer w-52 h-10 px-2 py-2.5  rounded-lg justify-start items-center gap-2.5 inline-flex", {
            "bg-white bg-opacity-10": selectedAppId === app.id
          })}>
            <div className="AppIconsCalendar w-5 h-5 relative shadow">
              <Image src={app.icon} width={26} height={26} alt={app.name} />
            </div>
            <div className="Text text-white text-xs font-normal font-['SF Pro Text'] leading-none">{app.name}</div>
          </div>

        )
      })}
    </div>
  </div>
}

export default WidgetsSearchForm
