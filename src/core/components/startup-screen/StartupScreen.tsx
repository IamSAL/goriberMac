/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
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
    <>
      <div
        id="globalLoader"
        style={{
          backgroundColor: "#000",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Apple Logo */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAHlCAYAAADSuwrEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QjFEQkI3NDM3QzExRTRBRTM2RTZFNjM5RkJEMkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE2QjFEQkI4NDM3QzExRTRBRTM2RTZFNjM5RkJEMkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTZCMURCQjU0MzdDMTFFNEFFMzZFNkU2MzlGQkQyRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTZCMURCQjY0MzdDMTFFNEFFMzZFNkU2MzlGQkQyRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz511mMZAAAySklEQVR42uzdB5xcdbXA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" // Replace with the actual path to your Apple logo image
          alt="Apple Logo"
          id="preloader-logo"
          style={{
            height: "96px",
            width: "85px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        />

        {/* Progress Bar Container */}
        <div
          style={{
            width: "300px",
            height: "8px",
            backgroundColor: "#474747",
            borderRadius: "16px",
            position: "absolute",
            bottom: "264px",
          }}
        >
          <div
            id="preloader-progress"
            style={{
              height: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              width: "0%",
              transition: "0.5s",
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default StartupScreen