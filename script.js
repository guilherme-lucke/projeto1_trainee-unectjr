const addTaskBtn = document.getElementById('add-task-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#close-btn');

addTaskBtn.addEventListener('click', () => {
    modal.classList.add('show');
});


closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

