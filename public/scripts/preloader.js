function trackPageLoadingProgress(callback) {
  const totalResources = document.querySelectorAll('img, script, link[rel="stylesheet"]').length
  let loadedResources = 0

  function resourceLoaded() {
    loadedResources++
    const percentage = (loadedResources / totalResources) * 100

    // Call the provided callback with the loading percentage
    callback(percentage)

    // Check if all resources are loaded
    if (loadedResources === totalResources) {
      // All resources are loaded
      // You can perform any additional actions here
    }
  }

  // Listen for load events on images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", resourceLoaded)
    img.addEventListener("error", resourceLoaded) // Handle errors if an image fails to load
  })

  // Listen for load events on scripts
  const scripts = document.querySelectorAll("script")
  scripts.forEach((script) => {
    script.addEventListener("load", resourceLoaded)
    script.addEventListener("error", resourceLoaded) // Handle errors if a script fails to load
  })

  // Listen for load events on stylesheets
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
  stylesheets.forEach((stylesheet) => {
    stylesheet.addEventListener("load", resourceLoaded)
    stylesheet.addEventListener("error", resourceLoaded) // Handle errors if a stylesheet fails to load
  })
}

// Example of using the function
trackPageLoadingProgress((percentage) => {
  const loader = document.getElementById("globalLoader")
  const logo = document.getElementById("preloader-logo")
  const progressBar = document.querySelector("#preloader-progress")
  const adjustedPercentage = Math.min(100, percentage * 1.2)
  if (percentage > 50) {
    logo.style.animation = "applePulse 2s infinite"
  }
  if (progressBar) {
    progressBar.style.width = `${adjustedPercentage}%`
  }
})
