// Texto do código em C
const codeText = `
#include <stdio.h>

int main() {
    printf("olá, mundo\\n");
    return 0;
}`;

const runCodeText = `
pedro@ubuntu:~$ gcc -o hello hello.c
pedro@ubuntu:~$ ./hello
olá, mundo
pedro@ubuntu:~$`;

// Captura o elemento de código
const codeElement = document.getElementById("codigo");

// "Escreve" o código no elemento
let index = 0;
function writeCode() {
  if (index < codeText.length) {
    codeElement.textContent += codeText.charAt(index);
    index++;
    setTimeout(writeCode, 60);
    
  }
  else {
    setTimeout(clearCode(), 3000);
    runCode();
  }
}

function clearCode() {
  codeElement.textContent = "";
  index = 0;
}

function runCode() {
  if(index < runCodeText.length) {
    document.getElementById("codigo").textContent += runCodeText.charAt(index);
    index++;
    setTimeout(runCode, 60);
  }
}

const carinhas = document.querySelectorAll(".carinha");
let indiceAtual = 0;

function mostrarProximoCarinha() {
  carinhas[indiceAtual].style.display = "none";
  indiceAtual++;

  if (indiceAtual === carinhas.length) {
    indiceAtual = 0;
  }

  carinhas[indiceAtual].style.display = "block";

  setTimeout(mostrarProximoCarinha, 2000);
}

// Inicia a escrita do código quando a página carrega
writeCode();
mostrarProximoCarinha();