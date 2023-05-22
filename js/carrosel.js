const content = document.querySelector('.kanban');
const elemento = content.querySelector('.container');
const mobilePrevBtn = document.getElementById("mobile-prev-btn");
const mobileNextBtn = document.getElementById("mobile-next-btn");

mobilePrevBtn.addEventListener("click", () => {
    const largura = elemento.clientWidth;
    content.scrollLeft -= largura+1;
});

mobileNextBtn.addEventListener("click", () => {
    const largura = elemento.clientWidth;
    content.scrollLeft += largura+1;
});

const pag1 = document.getElementById("pag-1");
const pag2 = document.getElementById("pag-2");
const pag3 = document.getElementById("pag-3");

pag1.classList.add('on');

content.addEventListener("scroll", () => {
    const posicao = content.scrollLeft;
    const largura = elemento.clientWidth;
    if (posicao >=0 && posicao<largura/2) {
        pag1.classList.add('on');
        pag2.classList.remove('on'); 
        pag3.classList.remove('on');
    } else if (posicao >= largura / 2 && posicao < largura*1.5) {
        pag1.classList.remove('on'); 
        pag2.classList.add('on');
        pag3.classList.remove('on');
    } else if (posicao >= largura * 1.5){
        pag1.classList.remove('on'); 
        pag2.classList.remove('on');
        pag3.classList.add('on');
    }
});

pag1.addEventListener('click', () => {
    content.scrollLeft = 0;
});

pag2.addEventListener('click', () => {
    const largura = elemento.clientWidth;
    content.scrollLeft = largura+1;
});

pag3.addEventListener('click', () => {
    const largura = elemento.clientWidth;
    content.scrollLeft = (largura+1) * 2;
});