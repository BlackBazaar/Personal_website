function toggleMode() {
  document.body.classList.toggle("dark-mode");

  var modeIcon = document.getElementById("modeIcon");

  if (modeIcon.classList.contains("fa-moon")) {
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
  } else {
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
  }
}
