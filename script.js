const form = document.querySelector('form');
const taskList = document.querySelector('.a-list');
const addTaskBtn = document.getElementById('add-task-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#close-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = form.querySelector('input[type="text"]');
    const taskDescriptionTextarea = form.querySelector('textarea');
    const taskText = taskInput.value.trim();
    const taskDescriptionText = taskDescriptionTextarea.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
      <div class="header">
        <h3>${taskText}</h3>
        <button class="material-icons" id="remove-btn">delete_outline</button>
      </div>
      <div class="body">
            <div class="description">
                <button id="description-btn">
                    <p>Ler descrição</p>
                    <span class="material-icons">expand_more</span>
                </button>
                <p class="hidden">${taskDescriptionText}</p>
            </div>
            <div class="status">
                <button id="back-btn">
                    <span class="material-icons">navigate_before</span>
                </button>
                <button id="advance-btn">
                    <span class="material-icons">navigate_next</span>
                </button>
            </div>
        </div>
    `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskDescriptionTextarea.value = '';
        const descriptionBtn = taskItem.querySelector('#description-btn');
        const descriptionText = taskItem.querySelector('.description p.hidden');
        let isDescriptionVisible = false;
        descriptionBtn.addEventListener('click', () => {
            if (isDescriptionVisible) {
                descriptionText.style.display = 'none';
                descriptionBtn.querySelector('p').textContent = 'Ler descrição';
                descriptionBtn.querySelector('.material-icons').textContent = 'expand_more';
            } else {
                descriptionText.style.display = 'flex';
                descriptionBtn.querySelector('p').textContent = 'Esconder descrição';
                descriptionBtn.querySelector('.material-icons').textContent = 'expand_less';
            }
            isDescriptionVisible = !isDescriptionVisible;
        });

        const advanceButton = taskItem.querySelector('#advance-btn');
        advanceButton.addEventListener('click', () => {
            const currentList = taskItem.parentElement;
            if (currentList.classList.contains('a-list')) {
                const eList = document.querySelector('.e-list');
                eList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
            } else if (currentList.classList.contains('e-list')) {
                const fList = document.querySelector('.f-list');
                fList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'replay';
                taskItem.querySelector('h3').classList.add('completed');
            } else if (currentList.classList.contains('f-list')) {
                const aList = document.querySelector('.a-list');
                aList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
                taskItem.querySelector('h3').classList.remove('completed');
            }
        });
        const backButton = taskItem.querySelector('#back-btn');
        backButton.addEventListener('click', () => {
            const currentList = taskItem.parentElement;
            if (currentList.classList.contains('e-list')) {
                const aList = document.querySelector('.a-list');
                aList.appendChild(taskItem);
            } else if (currentList.classList.contains('f-list')) {
                const eList = document.querySelector('.e-list');
                eList.appendChild(taskItem);
                advanceButton.querySelector('.material-icons').textContent = 'navigate_next';
                taskItem.querySelector('h3').classList.remove('completed');
            }
        });
        
        
        const removeButton = taskItem.querySelector('#remove-btn');
        removeButton.addEventListener('click', () => {
            const confirmation = confirm('Tem certeza que deseja excluir esta tarefa?');
            if (confirmation) {
                taskItem.remove();
            }
        });
    }
});

addTaskBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

form.addEventListener('submit', () => {
    modal.classList.remove('show');
});