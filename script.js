
window.addEventListener("DOMContentLoaded", () => {
  let bgimage = document.querySelector(".background");
  if (window.innerWidth < 427)
  {
    bgimage.src="./assets/images/image-web-3-mobile.jpg"
  }
})

let nav_btn = document.querySelector(".nav-menu");

nav_btn.addEventListener("click", ()=> {
  let sidebar = document.querySelector("sidebar");
  let sidenav = document.querySelector(".side-navigations");
  let darkTranspa = document.querySelector(".dark-transparent");

  if (window.getComputedStyle(sidebar).width == "0px")
  {
    nav_btn.src="./assets/images/icon-menu-close.svg";
    sidebar.style.width = "310px";
    sidenav.style.display = "flex";
    darkTranspa.style.background = "rgba(0, 0, 0, .50)";
  }
  else if (window.getComputedStyle(sidebar).width == "310px")
  {
    nav_btn.src="./assets/images/icon-menu.svg";
    sidebar.style.width = "0px";
    sidenav.style.display = "none";
    darkTranspa.style.background = "transparent";
  }

  darkTranspa.addEventListener("click", () => {
    nav_btn.src="./assets/images/icon-menu.svg";
    sidebar.style.width = "0px";
    sidenav.style.display = "none";
    darkTranspa.style.background = "transparent";
  })
})