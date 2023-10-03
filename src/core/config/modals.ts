import NiceModal from "@ebay/nice-modal-react"
import { CONSTANTS } from "@constants"
import { WidgetsBarDrawer } from "src/apps/WidgetsEditor/WidgetsSlotBar"
NiceModal.register(CONSTANTS.MODALS.WIDGETS_BAR, WidgetsBarDrawer)
