function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');

  var darkModeToggle = document.getElementById('darkModeToggle');
  var currentIcon = darkModeToggle.querySelector('img');

  // Change the icon based on the current mode
  if (body.classList.contains('dark-mode')) {
    currentIcon.src = "./assets/dark-mode-icon.png";
    currentIcon.alt = "Light Mode Toggle";
  } else {
    currentIcon.src = "./assets/light-mode-icon.png";
    currentIcon.alt = "Dark Mode Toggle";
  }
}


