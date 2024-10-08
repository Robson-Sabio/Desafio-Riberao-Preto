let currentSlide = 0;

export function moveSlide(direction) {
  const questions = document.querySelectorAll(".question");
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = questions.length - 1; // Se voltar do primeiro slide, vai para o último
  } else if (currentSlide >= questions.length) {
    currentSlide = 0; // Se avançar do último slide, vai para o primeiro
  }

  const container = document.querySelector(".container");
  container.style.transform = `translateX(${-currentSlide * 100}vw)`; // Transição para o slide atual
}

export function checkFibonacci() {
  const num = parseInt(document.getElementById("fibonacciInput").value);
  let a = 0,
    b = 1,
    fib = 0;
  let isFibonacci = false;
  const positions = []; // Array para armazenar as posições

  // Calcula a sequência de Fibonacci até o número informado
  while (fib <= num) {
    if (fib === num) {
      isFibonacci = true;
    }
    positions.push(fib); // Armazena o número da sequência
    fib = a + b;
    a = b;
    b = fib;
  }

  // Formata a resposta
  const positionText = isFibonacci
    ? ` e aparece na posição: ${positions.indexOf(num) + 1}°`
    : "";
  document.getElementById("fibonacciResult").innerText = isFibonacci
    ? `${num} pertence à sequência de Fibonacci${positionText}.`
    : `${num} não pertence à sequência de Fibonacci.`;
}
