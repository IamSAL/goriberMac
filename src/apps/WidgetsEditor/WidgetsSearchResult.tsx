import React from 'react'
import WidgetsPreview from './WidgetsPreview'
import WidgetWeather from 'src/core/components/widgets-bar/WidgetWeather'

const WidgetsSearchResult = () => {
  return (
    <div className="overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden flex justify-center items-center">
      <div className='grid grid-cols-2 gap-8 p-8'>
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />

        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />

        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />
        <WidgetsPreview name='Weather' description='See a compact view of current weather' component={WidgetWeather as () => JSX.Element} multiSized />

      </div>
    </div>
  )
}

export default WidgetsSearchResult
