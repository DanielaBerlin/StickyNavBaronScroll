const links = document.querySelectorAll('.nav-list li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
}

//Sticky Header

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

//ACTIVE MENU SWITCHER

const navList = document.querySelector(".nav-list");
navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains("link")){
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});

//SCROLL TO TOP

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn")
  } else {
    scrollBtn.classList.remove("show-btn")
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}