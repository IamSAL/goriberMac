import React from "react"
import StatusBarItem from "./StatusBarItem"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
const AppIconPlaceHolder = "/static/images/icons/app-icons-placeholder.svg?url"
import Image from "next/image"
import { useSelector } from "react-redux"
import { AppState } from "src/core/redux/redux"
import AppLauncher from "../common/AppLauncher"
import useActiveAppContext from "src/helpers/hooks/useActiveAppContext"
// import TfiAngleRight from "react-icons/tfi"

const StatusBarSystem = () => {
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="icon" icon="/static/images/icons/icons-system-icon.svg" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 mx-2">
        <DropdownMenuItem>About this Mac</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>System Preferences...</DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-between gap-28 w-full">
            <div className="">App Store...</div>
            <div className="text-[11px] bg-slate-600 p-[2px] px-2 rounded-full">5 updates</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="">
              <span>Recent Items</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLabel>Applications</DropdownMenuLabel>

                {runningApps?.map((app) => {
                  return (
                    <DropdownMenuItem key={app.id}>
                      <AppLauncher appId={app.id}>
                        <div className="flex">
                          <Image src={app.icon.png} width={18} height={18} alt={app.name} />
                          <span className="ml-1">{app.name}</span>
                        </div>
                      </AppLauncher>
                    </DropdownMenuItem>
                  )
                })}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Documents</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Servers</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Clear menu</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Force Quit Safari</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sleep</DropdownMenuItem>
        <DropdownMenuItem>Restart...</DropdownMenuItem>
        <DropdownMenuItem>Shut Down...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Lock Screen</span>
          <DropdownMenuShortcut>⇧⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Log out </span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusBarSystem
