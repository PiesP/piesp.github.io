document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  darkModeToggle.addEventListener("click", function() {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.removeAttribute("data-theme");
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    }
  });
});
