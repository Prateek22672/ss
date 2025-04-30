let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scroll Down
    header.classList.add("hide");
  } else {
    // Scroll Up
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});