function toggleMode() {
  const body = document.querySelector("body")
  body.classList.toggle("light")
  const isLightMode = body.classList.contains("light")

  toggleAvatar(isLightMode)
}

function toggleAvatar(isLightMode) {
  document
    .querySelector("#profile img")
    .setAttribute("src", `assets/avatar${isLightMode ? "-light" : ""}.png`)
}

const toggleButton = document.querySelector("#switch")
toggleButton.addEventListener("click", toggleMode)
