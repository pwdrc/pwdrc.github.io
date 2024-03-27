function altNav() {
  const nav = document.getElementsByClassName("nav")[0];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      nav.classList.add("scroll-nav");
    } else {
      nav.classList.remove("scroll-nav");
    } 
  });
}

// Inicia a escrita do código quando a página carrega
altNav();