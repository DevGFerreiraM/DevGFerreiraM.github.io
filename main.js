const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementById("brand-logo").src =
    "../img/GabrielFerreiraMendesbranco.svg";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const brandLogo = document.getElementById("brand-logo");
    if (e.matches) {
      brandLogo.src = "../img/GabrielFerreiraMendesbranco.svg";
    } else {
      brandLogo.src = "../img/marca.svg";
    }
  });

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementById("brand-logo2").src =
    "../img/GabrielFerreiraMendesbranco.svg";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const brandLogo = document.getElementById("brand-logo2");
    if (e.matches) {
      brandLogo.src = "../img/GabrielFerreiraMendesbranco.svg";
    } else {
      brandLogo.src = "../img/marca.svg";
    }
  });

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementById("fotodeperfil").src = "../img/perfil-escuro.jpg";
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const brandLogo = document.getElementById("fotodeperfil");
    if (e.matches) {
      brandLogo.src = "../img/perfil-escuro.jpg";
    } else {
      brandLogo.src = "../img/perfil.jpg";
    }
  });
