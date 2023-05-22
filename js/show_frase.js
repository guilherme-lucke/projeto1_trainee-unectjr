const showFraseBtn = document.getElementById('show-frase-btn');
const modalFrase = document.querySelector('.card');
const closeFraseBtn = document.querySelector('#close-frase-btn');

showFraseBtn.addEventListener('click', () => {
    modalFrase.classList.add('show');
});

closeFraseBtn.addEventListener('click', () => {
    modalFrase.classList.remove('show');
});
