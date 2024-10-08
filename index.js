import { moveSlide, checkFibonacci } from './modules/fibonacci.js';
import { checkString, setupEnterKeyListener } from './modules/stringCheck.js';

// Chame a função para os inputs correspondentes
setupEnterKeyListener("fibonacciInput", "fibonacciButton");
setupEnterKeyListener("stringInput", "stringButton");

// Ouvinte de evento para o botão Fibonacci
document.getElementById("fibonacciButton").addEventListener("click", checkFibonacci);

// Outros ouvintes de eventos
document.getElementById("showFibonacciScriptButton").addEventListener("click", function() {
  window.open("https://github.com/SEU_USUARIO/SEU_REPOSITORIO/blob/main/pasta/do/seu/script.js", "_blank");
});

document.getElementById("stringButton").addEventListener("click", checkString);

document.getElementById("showStringScriptButton").addEventListener("click", function() {
  window.open("https://github.com/SEU_USUARIO/SEU_REPOSITORIO/blob/main/pasta/do/seu/script.js", "_blank");
});

document.querySelector(".nav-button.left").addEventListener("click", function() {
  moveSlide(-1);
});

document.querySelector(".nav-button.right").addEventListener("click", function() {
  moveSlide(1);
});
