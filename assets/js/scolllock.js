window.addEventListener("load", () => {
  document.querySelector("body").ontouchend = (e) => {
    e.preventDefault();
  }
})
