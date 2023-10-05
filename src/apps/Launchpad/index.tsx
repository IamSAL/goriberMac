import Image from "next/image"
import React, { startTransition, useEffect, useMemo, useState, useTransition } from "react"
// import IconSearch from '/src/assets/icons/System/Search.svg';
import { apps } from "src/misc/placeholder-data/apps"
import AppLauncher from "../../core/components/common/AppLauncher"
import { LaunchpadContext } from "./context"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import * as _ from "lodash"
import { useEffectOnce } from "react-use"
import { useDispatch } from "react-redux"
import { setDockStatus } from "src/core/redux/system/system.slice"
import { DOCK_STATUS, IApp } from "@types"
import SearchBar from "./SearchBar"
import AppSlides from "./AppSlides"

const LaunchPad = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDockStatus(DOCK_STATUS.STICKY))
    return () => {
      dispatch(setDockStatus(DOCK_STATUS.NORMAL))
    }
  }, [])
  const [searchTerm, setsearchTerm] = useState("")
  const [matchedApps, setMatchedApps] = useState<IApp[]>([])
  const [appChunks, setappChunks] = useState<IApp[][]>([])

  useEffect(() => {
    startTransition(() => {
      const matchingApps = apps.filter((app) => app.name.toLowerCase().includes(searchTerm))
      // setMatchedApps(matchingApps)
      setappChunks(_.chunk(matchingApps, 28))
    })
    return () => {}
  }, [searchTerm])

  return (
    <LaunchpadContext.Provider
      value={{
        searchTerm,
        setsearchTerm,
        matchedApps,
      }}
    >
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
          <SearchBar />

          {appChunks.map((chunk, chunkIdx) => {
            return <AppSlides key={chunkIdx} apps={chunk} />
          })}
        </div>
      </div>
    </LaunchpadContext.Provider>
  )
}

export default LaunchPad
