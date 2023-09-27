import React, { useEffect, useState } from "react"

const StartupScreen: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress (0% to 100%) over a duration (e.g., 5 seconds)
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1
        if (newProgress >= 100) {
          clearInterval(interval)
          // Replace with logic to hide the startup screen
        }
        return newProgress
      })
    }, 50) // Adjust the interval for desired animation speed

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-black"
      id="globalLoader"
    >
      {/* Apple Logo */}
      <img
        src="/static/images/icons/icons-system-icon.svg" // Replace with the actual path to your Apple logo image
        alt="Apple Logo"
        className="h-24 w-24 animate-pulse"
      />

      {/* Progress Bar Container */}
      <div className="w-64 h-8 bg-gray-600 mt-6 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>

      {/* Progress Percentage */}
      <div className="mt-2 text-white font-semibold"></div>
    </div>
  )
}

export default StartupScreen
