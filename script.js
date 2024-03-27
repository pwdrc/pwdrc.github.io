// Texto do código em C
const codeText = `
oi! eu sou o pedro

esse é meu cantinho na web

fica à vontade e não repara na bagunça ^^
`;

const runCodeText = `
pedro@ubuntu:~$ gcc -o hello hello.c
pedro@ubuntu:~$ ./
hello
olá, mundo
pedro@ubuntu:~$`;

// Captura o elemento de código


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