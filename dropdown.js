const dropdown = document.querySelector(".dropdown")
const toggle = dropdown.querySelector(".dropdown-toggle")
const menu = dropdown.querySelector(".dropdown-menu")

let timeoutId;

function showMenu() {
  clearTimeout(timeoutId)
  menu.classList.add("show")
}

function hideMenu() {
  timeoutId = setTimeout(() => {
    menu.classList.remove("show")
  }, 200)
}

dropdown.addEventListener("mouseenter", showMenu)
dropdown.addEventListener("mouseleave", hideMenu)