let bar = document.getElementById("bar");
let nav = document.getElementById("nav");
let changeBar = document.getElementById("xLogo");

bar.addEventListener("click", () => {
  nav.classList.toggle("opened");
  bar.classList.toggle("clicked");
  changeBar.classList.toggle("click");
});

changeBar.addEventListener("click", () => {
  changeBar.classList.remove("click");
  nav.classList.remove("opened");
  bar.classList.remove("clicked");
});
