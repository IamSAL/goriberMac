import { cn } from '@utils'
import { Minus } from 'lucide-react'
import React from 'react'

const WidgetBody = ({ component, ...props }: any) => {
  console.log({ props })
  return component(props)
}

type TProps = {
  name: string,
  description: string,
  component: () => JSX.Element
}

const WidgetSlot = ({ name, description, component }: TProps) => {
  return (
    <div className='relative'>
      <button className={cn("absolute z-50 left-[-5px] top-[-5px] h-4 w-4 rounded-full border border-white border-opacity-75 bg-white bg-opacity-75 text-black flex items-center text-sm justify-center")}><Minus size={12} /></button>
      {<WidgetBody
        component={component}
      />}
    </div>
  )
}

export default WidgetSlot
