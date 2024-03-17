// Texto do código em C
const codeText = `
#include <stdio.h>

int main() {
    printf("olá, mundo\\n");
    return 0;
}`;

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


