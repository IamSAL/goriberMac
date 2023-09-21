/* eslint-disable import/prefer-default-export */

import { AppWindow } from "@components"
import { IApp, IAppTemplate } from "@types"

import AppStore from "src/apps/AppStore"
import Calendar from "src/apps/Calendar"
import Contacts from "src/apps/Contacts"
import Finder from "src/apps/Finder"
import LaunchPad from "src/apps/Launchpad"
import Mail from "src/apps/Mail"
import Maps from "src/apps/Maps"
import Messages from "src/apps/Messages"
import Photos from "src/apps/Photos"
import Safari from "src/apps/Safari"
import SystemPreferences from "src/apps/SystemPreferences"
import VsCode from "src/apps/VsCode"
import WidgetsEditor from "src/apps/WidgetsEditor"

export const apps: IApp[] = [
  {
    id: 0,
    name: "Finder",
    icon: "/static/images/icons/app-icons-finder.svg",
    status: {},
    metadata: {
      title: "Finder", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Finder,
    config: {
      isHidden: true,
      initTitle: "Finder",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: true,
      isDefault: true,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 1,
    name: "Launchpad",
    icon: "/static/images/icons/app-icons-launchpad.svg",
    status: {},
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: LaunchPad,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.IMMERSIVE,
    },
  },

  {
    id: 2,
    name: "App Store",
    icon: "/static/images/icons/app-icons-app-store.svg",
    status: {},
    metadata: {
      title: "AppStore", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: AppStore,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 3,
    name: "Mail",
    icon: "/static/images/icons/app-icons-mail.svg",
    status: {},
    metadata: {
      title: "Mail", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Mail,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 4,
    name: "Safari",
    icon: "/static/images/icons/app-icons-safari.svg",
    status: {},
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Safari,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 800,
      initWindowHeight: 500,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 5,
    name: "Photos",

    icon: "/static/images/icons/app-icons-photos.svg",
    status: {},
    metadata: {
      title: "Photos", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Photos,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: false,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 6,
    name: "System Preferences",
    icon: "/static/images/icons/app-icons-system-preferences.svg",
    status: {},
    metadata: {
      title: "System Preferences", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: SystemPreferences,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 7,
    name: "Calendar",
    icon: "/static/images/icons/app-icons-calendar.svg",
    status: {},
    metadata: {
      title: "Calendar", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Calendar,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: false,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 8,
    name: "Messages",
    icon: "/static/images/icons/app-icons-messages.svg",
    status: {},
    metadata: {
      title: "Messages", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Messages,
    config: {
      isHidden: true,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 9,
    name: "Maps",
    icon: "/static/images/icons/app-icons-maps.svg",
    status: {},
    metadata: {
      title: "Maps", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Maps,
    config: {
      isHidden: true,
      initTitle: "Maps",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 10,
    name: "Contacts",
    icon: "/static/images/icons/app-icons-contacts.svg",
    status: {},
    metadata: {
      title: "Contacts", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Contacts,
    config: {
      isHidden: true,
      initTitle: "Contacts",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },

  {
    id: 11,
    name: "Visual Studio Code",
    icon: "/static/images/icons/vscode-app.png",
    status: {},
    metadata: {
      title: "Visual Studio Code", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: VsCode,
    config: {
      isHidden: true,
      initTitle: "Vs code",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 12,
    name: "Widgets",
    icon: "/static/images/icons/app-icons-launchpad.svg",
    status: {},
    metadata: {
      title: "Widgets", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor,
    config: {
      isHidden: true,
      initTitle: "Widgets",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.IMMERSIVE,
    },
  },
]
