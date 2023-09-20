import React from 'react'
import WidgetWeather from 'src/core/components/widgets-bar/WidgetWeather'
import WidgetSlot from './WidgetSlot'

const WidgetsSlotBar = () => {
  return (
    <div className="slot overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden ">
      <div className='widgets-bar  p-8 py-4 flex flex-shrink-0 flex-col gap-4   '>
        <WidgetSlot name='Test' description='Tes' component={() => <WidgetWeather size='S' />} />
        <WidgetSlot name='Test' description='Tes' component={() => <WidgetWeather size='M' />} />
        <WidgetSlot name='Test' description='Tes' component={() => <WidgetWeather size='L' />} />
        <WidgetSlot name='Test' description='Tes' component={() => <WidgetWeather size='M' />} />
        <WidgetSlot name='Test' description='Tes' component={() => <WidgetWeather size='L' />} />
      </div>
    </div>
  )
}

export default WidgetsSlotBar
