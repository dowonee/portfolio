const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight * 0.5) {
    arrowup.style.opacity = 1;
  } else {
    arrowup.style.opacity = 0;
  }
});

const toggleBar = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menu');
const headerShow = () => {
  toggleBar.style.opacity = 0;
  headerMenu.style.opacity = 1;
  console.log(alert);
};
const headerHide = () => {
  toggleBar.style.opacity = 1;
  headerMenu.style.opacity = 0;
  console.log(alert);
};
toggleBar.addEventListener('click', headerShow);
toggleBar.addEventListener('click', headerHide);
