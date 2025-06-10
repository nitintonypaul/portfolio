// Script for basic functionality/UX

// Waiting DOMContent to load
document.addEventListener('DOMContentLoaded', () => {

  //Refreshing page upon clicking N
  document.getElementById('logo-container').addEventListener('click', () => {window.location.href = window.location.pathname})
  
  // Forcing clean reload every time
  window.addEventListener('load', () => {
  
      // Obtaining navigation type
      // Must be reload or 1
      // performance.navigation.type for older browser stability
      const navType = performance.getEntriesByType("navigation")[0]?.type || performance.navigation.type;

      // Checking and 'forcing' complete reload
      if (navType === "reload" || navType === 1) {
        window.location.href = window.location.href;
      }
  });

  // Hiding  menu upon clicking an element
  document.querySelectorAll('.element').forEach(el =>
    
    el.addEventListener('click', () => {

      document.getElementById('line-1').classList.remove('line-1-active')
      document.getElementById('line-2').classList.remove('line-2-active')

      // Hiding Menu
      gsap.to("#menu-section", {opacity: 0, duration: 0.5})
      
      setTimeout(() => {
          document.getElementById('menu-section').style.display = "none"

          // Enabling scroll
          document.body.style.overflow = '';

      }, 600)
    })
  )
})