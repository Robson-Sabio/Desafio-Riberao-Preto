export function checkString() {
    const str = document.getElementById('stringInput').value;
    let count = 0;
  
    // Divida o texto em palavras usando os espaços como separador
    const wordsArray = str.split(' ');
  
    // Crie um elemento div principal para conter os spans
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-container'); // Adicione uma classe ao div principal, se desejado
  
    // Selecione o elemento onde a saída será mostrada
    const resultContainer = document.getElementById('stringResult');
    resultContainer.innerHTML = ''; // Limpe o conteúdo anterior
    resultContainer.appendChild(mainDiv); // Adicione o div principal ao container de resultado
  
    // Percorra cada palavra e verifique a presença de 'a' ou 'A'
    wordsArray.forEach(word => {
      // Substitua os 'a' ou 'A' por uma versão destacada
      const highlightedWord = word.replace(/(a|A)/g, (matched) => {
        count++;
        return `<span class="highlight">${matched}</span>`;
      });
  
      // Crie um elemento span para a palavra processada
      const wordElement = document.createElement('span');
      wordElement.innerHTML = highlightedWord;
  
      // Adicione uma classe customizada ao span
      wordElement.classList.add('word-span'); // Aqui você adiciona a classe
  
      // Adicione o span ao div principal
      mainDiv.appendChild(wordElement);
  
      // Adicione um espaço após cada palavra (se não for a última palavra)
      mainDiv.appendChild(document.createTextNode(' '));
    });
  
    // Atualize a contagem de letras 'a' ou 'A'
    const countMessage = document.createElement('div');
    countMessage.innerHTML = `A letra 'a' aparece ${count} vezes.`;
    resultContainer.insertBefore(countMessage, mainDiv); // Insira a contagem antes do mainDiv
  }
  
  export function setupEnterKeyListener(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
  
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Impede o envio do formulário, se aplicável
        button.click(); // Simula um clique no botão
      }
    });
  }
  