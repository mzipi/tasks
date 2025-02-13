const input = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('new-task').addEventListener('keydown', addTask);

function addTask(event) {
    if (event.key === 'Enter'){
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
    
        if (taskText) {
            const li = createTaskElement(taskText);
            document.getElementById('task-list').appendChild(li);
            saveTaskToLocalStorage(taskText);
            taskInput.value = '';
        }
    }
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(taskText => {
        const li = createTaskElement(taskText);
        document.getElementById('task-list').appendChild(li);
    });
}

function saveTaskToLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function removeTaskFromLocalStorage(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)" class="del-task">&times;</button>`;
    return li;
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
    removeTaskFromLocalStorage(task.firstChild.textContent.trim());
}

