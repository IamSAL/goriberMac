import React, { useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const App = () => {
  const sourceRef = useRef(null)
  const targetRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const sourceControls = useAnimation()

  const moveDiv = async () => {
    if (!sourceRef.current || !targetRef.current || isAnimating) return

    setIsAnimating(true)

    const sourceDiv = sourceRef.current
    const targetDiv = targetRef.current

    // Get the positions of both divs
    const sourceRect = sourceDiv.getBoundingClientRect()
    const targetRect = targetDiv.getBoundingClientRect()

    // Calculate the difference in positions
    const deltaX = targetRect.left - sourceRect.left
    const deltaY = targetRect.top - sourceRect.top

    // Use Framer Motion to animate the source div
    await sourceControls.start({
      x: deltaX,
      y: deltaY,
      transition: {
        duration: 0.5, // Animation duration in seconds
        ease: "easeInOut", // Easing function
      },
    })

    // Reset the animation and source div's position
    // sourceControls.start({ x: 0, y: 0 });
    setIsAnimating(false)
  }

  return (
    <div className="flex justify-between items-center h-screen">
      <motion.div
        ref={sourceRef}
        className="w-16 h-16 bg-red-500 cursor-pointer"
        whileHover={{ scale: 1.1 }} // Scaling animation on hover
        animate={sourceControls}
      >
        Source Div
      </motion.div>
      <div ref={targetRef} className="w-16 h-16 bg-blue-500">
        Target Div
      </div>
      <button
        className="bg-green-500 text-white p-2 rounded-md ml-4"
        onClick={moveDiv}
        disabled={isAnimating}
      >
        Move Div
      </button>
    </div>
  )
}

export default App
