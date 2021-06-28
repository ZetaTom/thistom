/*=========================================================================
        Theme Switcher - Set theme based on device preference
=========================================================================*/
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("night");
  }
