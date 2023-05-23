//nav
const body = document.querySelector('body');

const btnMenu = document.querySelector(".primary-nav-btn");
const btnLang = document.querySelector(".language-nav-btn");
const btnCloseMenu = document.querySelector(".close-menu");
const btnCloseLang = document.querySelector(".close-lang");

const primaryNav = document.querySelector(".primary-nav");
const languageNav = document.querySelector(".language-nav");

const langNavEn = document.querySelector(".lang-navigation-en");
const langNavBr = document.querySelector(".lang-navigation-br");
const langNavEs = document.querySelector(".lang-navigation-es");
const langNavCn = document.querySelector(".lang-navigation-cn");

const menuEn = document.querySelector(".menu-navigation-en");
const menuBr = document.querySelector(".menu-navigation-br");
const menuEs = document.querySelector(".menu-navigation-es");
const menuCn = document.querySelector(".menu-navigation-cn");


btnMenu.addEventListener('click', () => {
  primaryNav.setAttribute("data-visible", true);
})

btnLang.addEventListener('click', () => {
  languageNav.setAttribute("data-visible", true);
})

btnCloseMenu.addEventListener('click', () => {
  primaryNav.setAttribute("data-visible", false);
})

btnCloseLang.addEventListener('click', () => {
  languageNav.setAttribute("data-visible", false);
})

// //brower language detection

//language menu
langNavEn.classList.add('hidden')
langNavBr.classList.add('hidden')
langNavEs.classList.add('hidden')
langNavCn.classList.add('hidden')

//navigation menu
menuEn.classList.add('hidden')
menuBr.classList.add('hidden')
menuEs.classList.add('hidden')
menuCn.classList.add('hidden')

//language detection
if (window.location.toString().includes("/en")) {
    langNavEn.classList.remove('hidden')
    langNavBr.classList.add('hidden')
    langNavEs.classList.add('hidden')
    langNavCn.classList.add('hidden')

    menuEn.classList.remove('hidden')
    menuBr.classList.add('hidden')
    menuEs.classList.add('hidden')
    menuCn.classList.add('hidden')
  }
  else if (window.location.toString().includes("/br")) {
    langNavEn.classList.add('hidden')
    langNavBr.classList.remove('hidden')
    langNavEs.classList.add('hidden')
    langNavCn.classList.add('hidden')

    menuEn.classList.add('hidden')
    menuBr.classList.remove('hidden')
    menuEs.classList.add('hidden')
    menuCn.classList.add('hidden')
  }
  else if (window.location.toString().includes("/es")) {
    langNavEn.classList.add('hidden')
    langNavBr.classList.add('hidden')
    langNavEs.classList.remove('hidden')
    langNavCn.classList.add('hidden')

    menuEn.classList.add('hidden')
    menuBr.classList.add('hidden')
    menuEs.classList.remove('hidden')
    menuCn.classList.add('hidden')
  }
  else if (window.location.toString().includes("/cn")) {
    langNavEn.classList.add('hidden')
    langNavBr.classList.add('hidden')
    langNavEs.classList.add('hidden')
    langNavCn.classList.remove('hidden')

    menuEn.classList.add('hidden')
    menuBr.classList.add('hidden')
    menuEs.classList.add('hidden')
    menuCn.classList.remove('hidden')
  }




//video player
import Plyr from 'plyr';
const player = new Plyr('#player', {});
const playerInHonor = new Plyr('#player-in-honor', {});

//language selection