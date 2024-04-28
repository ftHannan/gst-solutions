window.addEventListener("scroll", function () {
  var navbar = document.getElementById("bg-nav");
  var footer = document.getElementById("bg-footer");
  var container = document.getElementById("bg-main");
  var container2 = document.getElementById("bg-fo");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "black";
    footer.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "#084298";
    footer.style.backgroundColor = "#084298";
  }

  if (window.scrollY > 0) {
    container.classList.add("scrolled");
  } else {
    container.classList.remove("scrolled");
  }
});
