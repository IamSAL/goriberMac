import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User } from "db"

export type Role = "ADMIN" | "USER"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
    }
  }
}

export type TAppStatus = {
  isMAXIMIZED: boolean
  isLOADING: boolean
  isFOREGROUND: boolean
  isHidden: boolean
}
export interface IApp {
  // Basic Information
  id: number
  name: string
  icon: string
  // Status and Behavior
  status: Partial<TAppStatus>
  // Metadata
  metadata: {
    title: string // The title of the app
    description?: string // A short description or tooltip
    version?: string // App version number
    author?: string // App author or developer
    website?: string // App's official website URL
  }
  // UI and Layout
  component: () => JSX.Element // The React component that represents the app
  config: {
    isHidden: boolean
    initTitle?: string // Initial window title
    initWindowWidth: number // Initial window width (e.g., "800px")
    initWindowHeight: number // Initial window height (e.g., "600px")
    startMaximized: boolean
    isPinned: boolean
    isDefault: boolean
    template: IAppTemplate
  }

  // Windows and Tabs (if applicable)
  windows?: IAppWindow[] // An array of open windows or tabs
}

export enum IAppTemplate {
  WINDOW,
  IMMERSIVE,
}

// Interface for representing an app window or tab
export interface IAppWindow {
  id: number
  title: string
  content: React.ReactNode // Content displayed in the window/tab
  isMaximized: boolean // Is the window/tab maximized?
  // Other window-specific properties (e.g., position, size)
}

// Interface for managing notifications within the app
export interface INotification {
  id: number
  content: string // Notification message or content
  timestamp: Date // Timestamp when the notification was created
  isRead: boolean // Has the notification been read?
  // Other notification-specific properties (e.g., actions)
}

// Interface for defining keyboard shortcuts
export interface IShortcut {
  id: number
  keyCombination: string // Keyboard combination (e.g., "Ctrl+C")
  action: () => void // Function to execute when the shortcut is triggered
  description: string // Description of the shortcut
}

// Interface for defining context menu items
export interface IMenuItem {
  id: number
  label: string // Label or text of the menu item
  action: () => void // Function to execute when the item is clicked
  isEnabled: boolean // Is the item enabled (clickable)?
  // Other menu item-specific properties (e.g., icons)
}
