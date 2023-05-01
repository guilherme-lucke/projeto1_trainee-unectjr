const adviceUrl = 'https://api.adviceslip.com/advice';
const adviceElement = document.querySelector('.frase p');

fetch(adviceUrl)
    .then(response => response.json())
    .then(data => adviceElement.textContent = data.slip.advice)
    .catch(error => console.log(error));