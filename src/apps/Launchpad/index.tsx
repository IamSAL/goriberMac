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
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"

const SLIDE_CHUNK_SIZE = 28

const LaunchPad = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDockStatus(DOCK_STATUS.STICKY))
    return () => {
      dispatch(setDockStatus(DOCK_STATUS.NORMAL))
    }
  }, [dispatch])
  const [searchTerm, setsearchTerm] = useState("")
  const [matchedApps, setMatchedApps] = useState<IApp[]>([])
  const [appChunks, setappChunks] = useState<IApp[][]>(_.chunk(apps, SLIDE_CHUNK_SIZE))
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=" bg-white rounded-full  ${className}"></div>`
    },
  }
  useEffect(() => {
    startTransition(() => {
      const matchingApps = apps.filter((app) => app.name.toLowerCase().includes(searchTerm))
      // setMatchedApps(matchingApps)
      setappChunks(_.chunk(matchingApps, SLIDE_CHUNK_SIZE))
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
      <div className="w-full h-full relative overflow-hidden LaunchpadContainer">
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
          {appChunks.length > 0 ? (
            <Swiper
              pagination={appChunks.length > 1 ? pagination : false}
              modules={[Pagination]}
              className="AppsSlider"
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={0}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {appChunks.map((chunk, chunkIdx) => {
                return (
                  <SwiperSlide key={chunkIdx}>
                    <AppSlides apps={chunk} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          ) : (
            <p className="text-4xl opacity-40 fade-in-10 font-light text-center h-[60%] flex items-center justify-center">
              No Results
            </p>
          )}
        </div>
      </div>
    </LaunchpadContext.Provider>
  )
}

export default LaunchPad
