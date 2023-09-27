import { useAutoAnimate } from "@formkit/auto-animate/react"
import { WidgetProps } from "@types"
import { cn } from "@utils"
import { CloudCog, CloudDrizzle, CloudDrizzleIcon, CloudFog, CloudLightning } from "lucide-react"
import React from "react"

const SmallWidget = () => {
  return <div className="w-full h-full flex flex-col justify-between "></div>
}

const MediumWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between "></div>
    </div>
  )
}

const LargeWidget = () => {
  return (
    <div className="">
      <div className="w-full h-full flex  justify-between "></div>
    </div>
  )
}

const PlaceHolderWidget = ({ size = "L", className }: WidgetProps) => {
  console.log({ size })
  const getWidget = () => {
    switch (size) {
      case "S":
        return <SmallWidget />
        break
      case "M":
        return <MediumWidget />
        break
      case "L":
        return <LargeWidget />
        break
      default:
        return <SmallWidget />
        break
    }
  }

  const [animeParent, enableAnimations] = useAutoAnimate()
  return (
    <div
      ref={animeParent}
      className={cn(
        "relative flex-shrink-0 bg-gradient-to-b to-[#3d3d3d] from-[#0a0b0c] rounded-2xl shadow p-4 ",
        className,
        {
          "WidgetsSmall w-40 h-40": size === "S",
          "WidgetsMedium w-80 h-40 ": size === "M",
          "WidgetsLarge w-80 h-80": size === "L",
        }
      )}
    >
      {getWidget()}
    </div>
  )
}

export default PlaceHolderWidget
