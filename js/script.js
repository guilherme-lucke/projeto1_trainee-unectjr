const showFraseBtn = document.getElementById('show-frase-btn');
const modalFrase = document.querySelector('.card');
const closeFraseBtn = document.querySelector('#close-frase-btn');

showFraseBtn.addEventListener('click', () => {
    modalFrase.classList.add('show');
});

closeFraseBtn.addEventListener('click', () => {
    modalFrase.classList.remove('show');
});


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
      <div>
        <h3>${taskText}</h3>
        <button class="material-icons" id="remove-btn">delete_outline</button>
      </div>
      <div>
            <div id="description">
		        <div class="description-btn">
	                <button id="description-btn" />
	                    <span id="visible-btn">
	                        <p>Ler descrição</p>
	                        <i class="material-icons">expand_more</i>
	                    </span>
	                    <span id="hidden-btn">
	                        <p>Esconder descrição</p>
	                        <i class="material-icons">expand_less</i>
	                    </span>
                    </button>
		        </div>
                <p class="hidden">${taskDescriptionText}</p>
            </div>
            <div class="status">
                <button id="back-btn">
                    <i class="material-icons">navigate_before</i>
                </button>
                <button id="advance-btn">
                    <i class="material-icons">navigate_next</i>
                </button>
            </div>
        </div>
    `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskDescriptionTextarea.value = '';

        const showDescripiontBtn = taskItem.querySelector('.description-btn');
        if (taskDescriptionText === '') {
            showDescripiontBtn.style.display = 'none'
        }

        const descriptionBtn = taskItem.querySelector('#description-btn');
        const description = taskItem.querySelector('#description');
        const descriptionText = taskItem.querySelector('#description p.hidden');

        descriptionBtn.addEventListener('click', () => {
            description.classList.toggle('visible');
            descriptionText.style.display = description.classList.contains('visible') ? 'flex' : 'none';
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
