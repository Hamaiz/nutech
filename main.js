function enableDarkmode() {
  document.body.classList.add("dark")
  localStorage.setItem("darkmode", "enabled")
}

function disableDarkmode() {
  document.body.classList.remove("dark")
  localStorage.setItem("darkmode", "null")
}

let darkmode = localStorage.getItem("darkmode")

const mode = document.querySelector(".mode")
const checkbox = document.querySelector("input[type='checkbox']")
checkbox.checked = false

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    enableDarkmode()
    return
  }

  checkbox.checked = false
  disableDarkmode()
})

if (darkmode === "enabled") {
  enableDarkmode()
  checkbox.checked = true
} else {
  disableDarkmode()
  checkbox.checked = false
}
