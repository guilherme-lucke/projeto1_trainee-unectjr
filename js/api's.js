const adviceElement = document.querySelector('.frase p');

function getAdvice() {
    const lastRequestDate = localStorage.getItem('last_request_date');
    const today = new Date().toISOString().slice(0, 10);

    if (lastRequestDate === today) {
        // Não faz a requisição, pois já foi feita hoje
        return;
    }

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;

            const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(advice)}&langpair=en|pt-BR`;
            return fetch(apiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const translatedAdvice = data.responseData.translatedText;
            adviceElement.textContent = translatedAdvice;

            // Atualiza a data da última requisição no localStorage
            localStorage.setItem('last_request_date', today);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
            adviceElement.textContent = 'Não foi possível carregar a frase do dia.';
        });
}

getAdvice();

setInterval(getAdvice, 24 * 60 * 60 * 1000);
