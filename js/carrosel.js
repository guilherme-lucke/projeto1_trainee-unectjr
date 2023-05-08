const content = document.querySelector(".kanban");
const scrollPrevBtn = document.getElementById("swiper-prev-btn");
const scrollNextBtn = document.getElementById("swiper-next-btn");
const scrollSpeed = 10; 
let scrollInterval;

scrollPrevBtn.addEventListener("mousedown", function () {
    scrollInterval = setInterval(function () {
        content.scrollLeft -= scrollSpeed;
    }, 10);
});

scrollNextBtn.addEventListener("mousedown", function () {
    scrollInterval = setInterval(function () {
        content.scrollLeft += scrollSpeed;
    }, 10);
});

scrollPrevBtn.addEventListener("mouseup", stopScroll);
scrollPrevBtn.addEventListener("mouseleave", stopScroll);
scrollNextBtn.addEventListener("mouseup", stopScroll);
scrollNextBtn.addEventListener("mouseleave", stopScroll);

function stopScroll() {
    clearInterval(scrollInterval);
}

// MOBILE
const elemento = document.querySelector('ul');
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
    if (posicao < 1) {
        pag1.classList.add('on');
        pag2.classList.remove('on'); 
        pag3.classList.remove('on');
    } else if (posicao > 1 & posicao < 287) {
        pag1.classList.remove('on'); 
        pag2.classList.add('on');
        pag3.classList.remove('on');
    } else {
        pag1.classList.remove('on'); 
        pag2.classList.remove('on');
        pag3.classList.add('on');
    }
});

