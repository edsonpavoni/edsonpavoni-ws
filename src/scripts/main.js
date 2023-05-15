//nav
const body = document.querySelector('body');

const btnToggle = document.querySelector(".btn-toggle");
const iconClose = document.querySelector(".icon-close");
const iconMenu = document.querySelector(".icon-menu");
const primaryNav = document.querySelector(".primary-navigation");
const langNavEn = document.querySelector(".lang-navigation-en");
const langNavBr = document.querySelector(".lang-navigation-br");

//hide itens on load
primaryNav.classList.add('hidden');
iconClose.classList.add('hidden');

btnToggle.addEventListener('click', () => {

    primaryNav.hasAttribute("data-visible")
    ? btnToggle.setAttribute("aria-expanded", false)
    : btnToggle.setAttribute("aria-expanded", true)

    primaryNav.hasAttribute("data-visible")
    ? primaryNav.classList.add('hidden')
    : primaryNav.classList.remove('hidden')

    //remove icon X
    primaryNav.hasAttribute("data-visible")
    ? iconClose.classList.add('hidden')
    : iconClose.classList.remove('hidden')

    //remove menu icon
    primaryNav.hasAttribute("data-visible")
    ? iconMenu.classList.remove('hidden')
    : iconMenu.classList.add('hidden')

    //change status
    primaryNav.toggleAttribute("data-visible");

    //remove scroll
    body.classList.toggle('menu-open');
} )


//brower language detection

//language detection
if (window.location.toString().includes("/en")) {
    langNavEn.classList.remove('hidden')
    langNavBr.classList.add('hidden')
  }
  else if (window.location.toString().includes("/br")) {
    langNavEn.classList.add('hidden')
    langNavBr.classList.remove('hidden')
  }

//language selection


//video player
import Plyr from 'plyr';
const player = new Plyr('#player', {});
const playerInHonor = new Plyr('#player-in-honor', {});