
import { Drawer, DrawerContent } from '@components/ui/Drawer';
import { CONSTANTS } from '@constants';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { DialogOverlay } from '@radix-ui/react-dialog';
// import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import React from 'react'

const WidgetsBar = () => {
  return (
    <div className='widgets-bar  px-0 py-4 flex  flex-col gap-2 overflow-y-auto overflow-x-hidden h-[98vh] no-scrollbar'>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => {
          return <div key={idx} className="widget-container flex text-center justify-center align-middle  flex-shrink-0 w-full h-[150px] bg-black bg-opacity-50 rounded-lg shadow-lg">
            {idx}
          </div>
        })
      }

    </div>
  )
}

export const WidgetsBarDrawer = NiceModal.create(
  ({ content }: { content: string }) => {
    const modal = useModal(CONSTANTS.MODALS.WIDGETS_BAR);
    return (
      <Drawer
        open={modal.visible}
        onOpenChange={async (open) => {
          if (!open) {
            await modal.hide()
          }
        }}

      >

        <DrawerContent className='bg-transparent border-0 shadow-none px-3'>
          <WidgetsBar />
        </DrawerContent>

      </Drawer>
    );
  }
);


export default WidgetsBar
