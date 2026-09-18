// ---------- navigation ----------
const btnMenu = document.querySelector(".primary-nav-btn");
const btnLang = document.querySelector(".language-nav-btn");
const btnCloseMenu = document.querySelector(".close-menu");
const btnCloseLang = document.querySelector(".close-lang");
const primaryNav = document.querySelector(".primary-nav");
const languageNav = document.querySelector(".language-nav");

function openNav(nav, opener, closeBtn) {
  nav.setAttribute("data-visible", "true");
  opener.setAttribute("aria-expanded", "true");
  closeBtn.focus();
}
function closeNav(nav, opener) {
  if (nav.getAttribute("data-visible") !== "true") return false;
  nav.setAttribute("data-visible", "false");
  opener.setAttribute("aria-expanded", "false");
  opener.focus();
  return true;
}

btnMenu.addEventListener("click", () => openNav(primaryNav, btnMenu, btnCloseMenu));
btnLang.addEventListener("click", () => openNav(languageNav, btnLang, btnCloseLang));
btnCloseMenu.addEventListener("click", () => closeNav(primaryNav, btnMenu));
btnCloseLang.addEventListener("click", () => closeNav(languageNav, btnLang));
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (closeNav(primaryNav, btnMenu) || closeNav(languageNav, btnLang)) e.preventDefault();
});

// ---------- language-specific menus ----------
const seg = window.location.pathname.split("/")[1];
const current = ["en", "br", "es", "cn"].includes(seg) ? seg : "en";
for (const code of ["en", "br", "es", "cn"]) {
  document.querySelector(`.lang-navigation-${code}`).classList.toggle("hidden", code !== current);
  document.querySelector(`.menu-navigation-${code}`).classList.toggle("hidden", code !== current);
}

// ---------- looping videos: load and play only when on screen ----------
const loops = document.querySelectorAll("video[data-autoplay]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  // Show the poster and let the person start it themselves.
  loops.forEach((v) => { v.controls = true; });
} else if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const v = e.target;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      }
    },
    { rootMargin: "300px 0px" }
  );
  loops.forEach((v) => io.observe(v));
} else {
  loops.forEach((v) => v.play().catch(() => {}));
}

// ---------- YouTube embeds: poster first, player on click ("lite embed" pattern) ----------
// The iframe is created inside the click handler, so YouTube autoplays on that same click.
document.querySelectorAll(".yt-facade").forEach((facade) => {
  facade.querySelector(".yt-facade__play").addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${facade.dataset.yt}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.title = facade.dataset.title || "Video";
    iframe.className = "yt-facade__player";
    facade.replaceChildren(iframe);
  });
});
