<<<<<<< HEAD
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


const checkbox = document.getElementById('menu-check');
  const offcanvas = document.getElementById('demo');
  const closeBtn = document.querySelector('.btn-close');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      offcanvas.classList.add('show');
    } else {
      offcanvas.classList.remove('show');
    }
  });

  closeBtn.addEventListener('click', () => {
    checkbox.checked = false;
    offcanvas.classList.remove('show');
=======
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


const checkbox = document.getElementById('menu-check');
  const offcanvas = document.getElementById('demo');
  const closeBtn = document.querySelector('.btn-close');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      offcanvas.classList.add('show');
    } else {
      offcanvas.classList.remove('show');
    }
  });

  closeBtn.addEventListener('click', () => {
    checkbox.checked = false;
    offcanvas.classList.remove('show');
>>>>>>> b4bf01779fb11ce926e56a6f357108f085d0cffc
  });