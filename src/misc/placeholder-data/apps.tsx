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
import WidgetWeather from "src/core/components/widgets-bar/WidgetWeather"
import { generateRandomApps, generateRandomWidgets } from "./generators"

export const apps: IApp[] = [
  {
    id: 13,
    name: "Weather",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "",
    },
    status: {},
    metadata: {
      title: "Weather", // The title of the app
      description: "Weather.com forecasts", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor as any,
    config: {
      isHidden: true,
      initTitle: "Weather",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WEBVIEW,
    },
    widgets: [
      {
        name: "Forecast",
        description: "See a compact view of current weather",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
      {
        name: "How's Temp",
        description: "See a compact view of temperature forecast.",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
      {
        name: "Weather Details",
        description: "See a compact view of current weather",
        component: WidgetWeather,
        appId: 13,
        multiSized: true,
      },
    ],
  },
  {
    id: 0,
    name: "Finder",
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "Finder", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Finder,
    config: {
      isHidden: false,
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
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: LaunchPad,
    config: {
      isHidden: false,
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
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "AppStore", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: AppStore,
    config: {
      isHidden: false,
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
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "Mail", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Mail,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(4, 3),
  },
  {
    id: 4,
    name: "Safari",
    icon: {
      svg: "/static/images/icons/app-icons-safari.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "Launchpad", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Safari,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 800,
      initWindowHeight: 500,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(7, 4),
  },
  {
    id: 5,
    name: "Photos",
    icon: {
      svg: "/static/images/icons/app-icons-photos.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Photos", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    status: {},
    component: Photos,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: false,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(2, 5),
  },
  {
    id: 6,
    name: "System Preferences",
    status: {},
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "System Preferences", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: SystemPreferences,
    config: {
      isHidden: false,
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
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    status: {},
    metadata: {
      title: "Calendar", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Calendar,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: false,
      isPinned: true,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(3, 7),
  },
  {
    id: 8,
    name: "Messages",
    status: {},
    icon: {
      svg: "/static/images/icons/app-icons-messages.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Messages", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Messages,
    config: {
      isHidden: false,
      initTitle: "Launchpad",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
    widgets: generateRandomWidgets(2, 8),
  },
  {
    id: 9,
    name: "Maps",
    status: {},
    icon: {
      svg: "/static/images/icons/app-icons-maps.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Maps", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Maps,
    config: {
      isHidden: false,
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
    status: {},
    icon: {
      svg: "/static/images/icons/app-icons-contacts.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Contacts", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: Contacts,
    config: {
      isHidden: false,
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
    status: {},
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/vscode-app.png",
    },
    metadata: {
      title: "Visual Studio Code", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: VsCode,
    config: {
      isHidden: false,
      initTitle: "Vs code",
      initWindowWidth: 927,
      initWindowHeight: 652,
      startMaximized: true,
      isDefault: true,
      isPinned: false,
      template: IAppTemplate.WINDOW,
    },
  },
  {
    id: 12,
    name: "Widgets Editor",
    status: {},
    icon: {
      svg: "/static/images/icons/ios-weather.svg",
      png: "/static/images/icons/PNG/Photos.png",
    },
    metadata: {
      title: "Widgets", // The title of the app
      description: "System default launcher", // A short description or tooltip
      version: "0.0.1", // App version number
    },
    component: WidgetsEditor as any,
    config: {
      isHidden: false,
      initTitle: "Widgets",
      initWindowWidth: 640,
      initWindowHeight: 480,
      startMaximized: true,
      isPinned: true,
      isDefault: true,
      template: IAppTemplate.IMMERSIVE,
    },
  },
  ...generateRandomApps(45),
]
