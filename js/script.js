const cursorDiv = document.querySelector('.big-cursor');
const themeButton = document.querySelector('.theme-button');
const hamburGer = document.querySelector('.hamburger')
const hamburGerLine1 = document.querySelector('.hamburger div:nth-child(1)');
const hamburGerLine2 = document.querySelector('.hamburger div:nth-child(2)');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

hamburGer.addEventListener('click', function(){
  hamburGerLine1.classList.toggle('show');
  hamburGerLine2.classList.toggle('show');
  menuMobile.classList.toggle('show');
  body.classList.toggle('overflow-hide');
  cursorDiv.classList.toggle('hide');
} )
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  cursorDiv.style.left = `${clientX + scrollX}px`;
  cursorDiv.style.top = `${clientY + scrollY}px`;
});

function loadTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.style.setProperty('--black', 'white');
    document.documentElement.style.setProperty('--white', 'black');
    themeButton.classList.add('fa-regular');
    themeButton.classList.remove('fa-solid');
  } else {
    document.documentElement.style.setProperty('--black', 'black');
    document.documentElement.style.setProperty('--white', 'white');
    themeButton.classList.add('fa-solid');
    themeButton.classList.remove('fa-regular');
  }
  const isRotated = localStorage.getItem('buttonRotated') === 'true';
  if (isRotated) {
    themeButton.classList.add('rotate');
  }
}

function toggleTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.style.setProperty('--black', 'black');
    document.documentElement.style.setProperty('--white', 'white');
    localStorage.setItem('theme', 'light');
    themeButton.classList.add('fa-solid');
    themeButton.classList.remove('fa-regular');
  } else {
    document.documentElement.style.setProperty('--black', 'white');
    document.documentElement.style.setProperty('--white', 'black');
    localStorage.setItem('theme', 'dark');
    themeButton.classList.add('fa-regular');
    themeButton.classList.remove('fa-solid');
  }
  const isRotated = themeButton.classList.toggle('rotate');
  localStorage.setItem('buttonRotated', isRotated);
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  themeButton.addEventListener('click', toggleTheme);
});
function handleIntersection(
  entries,
  observer,
  animationClass,
  isOutClass = false
) {
  entries.forEach((entry) => {
    const shouldAddClass = isOutClass
      ? !entry.isIntersecting
      : entry.isIntersecting
    if (shouldAddClass) {
      entry.target.classList.add(animationClass)
    } else if (isOutClass) {
      entry.target.classList.remove(animationClass)
    }
  })
}
const observerOption = {
  rootMargin: '0px 0px',
  threshold: 0.8,
}
const theFooterLogo = document.querySelector('.logo-footer');
const theLogoFooterObserver = new IntersectionObserver((entries) => {
  handleIntersection(entries, theLogoFooterObserver, 'show');
}, observerOption);

theLogoFooterObserver.observe(theFooterLogo);

const loadingScreen = document.querySelector('.loading-screen');

body.classList.add('overflow-hide');
window.addEventListener('load', function() {
  loadingScreen.style.display = 'none';
  body.classList.remove('overflow-hide');
})
