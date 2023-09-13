import React, { useEffect, useState } from "react"
import StatusBarItem from "./StatusBarItem"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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
import {
  ArrowBigRight,
  ArrowRight,
  CheckCheckIcon,
  Keyboard,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  UserPlus,
  Users,
} from "lucide-react"
import CommandIcon from "src/assets/icons/System/Command.svg"
import Image from "next/image"
// import TfiAngleRight from "react-icons/tfi"
const StatusBarSystem = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="icon" icon="/static/images/icons/icons-system-icon.svg" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 mx-2">
        <DropdownMenuItem>About this Mac</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>System Preferences...</DropdownMenuItem>
        <DropdownMenuItem>App Store...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="">
              <span className="mr-36">Recent Items</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  {/* <div>
                  <Image src={AppIconPlaceHolder} width={35} height={35} ></Image>
                </div> */}
                  <span>Mail</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
        <DropdownMenuItem>Lock Screen</DropdownMenuItem>
        <DropdownMenuItem>
          <span className="mr-25">Logout Guest User</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusBarSystem
