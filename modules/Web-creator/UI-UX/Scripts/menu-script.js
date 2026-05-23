
export function menuToggle(){
const menuBtn = document.querySelector("#menu-button")
const menu = document.querySelector(".toolbar")

menuBtn.addEventListener("click", () => { menu.classList.toggle("active")})
}

export function toolbarVisible () {
  const toolBtn = document.querySelector("#tool-btn")
  const toolbar = document.querySelector("#aside-property")
  
  toolBtn.addEventListener("click", () => {
    toolbar.classList.toggle("active")
  })
}