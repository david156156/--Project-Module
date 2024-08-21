function hamburger() {
  let menu = document.getElementById("menui");
  let hamburgerHover = document.getElementById("hamburger");
  if (menu.style.display == "none") {
    menu.style.display = "block";
    hamburgerHover.style.color = "#ffffff";
    hamburgerHover.style.backgroundColor = "#3b3b3b";
  } else {
    menu.style.display = "none";
    hamburgerHover.style.color = "#1ae0ec";
    hamburgerHover.style.backgroundColor = "#f0f0f0";
  }
}
