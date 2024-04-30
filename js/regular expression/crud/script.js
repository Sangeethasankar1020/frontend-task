// regular expression
// crud
let todos = [];
// add
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim(); //empty space remove
    if (todoText !== '') {
        const newTodo = {
            id: Date.now(),
            text: todoText
        };
        todos.push(newTodo);
        renderTodoList();
        todoInput.value = '';
    }
}
// delete
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodoList();
}
// update
function updateTodo(id, newText) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { id: id, text: newText };
        }
        return todo;
    });
    renderTodoList();
}

function renderTodoList() {
    const todoListContainer = document.getElementById('todoList');
    todoListContainer.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoInput = document.createElement('input');
        todoInput.type = 'text';
        todoInput.value = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => {
            const newText = todoInput.value.trim();
            if (newText !== '') {
                updateTodo(todo.id, newText);
            }
        });

        todoItem.appendChild(todoInput);
        todoItem.appendChild(updateButton);
        todoItem.appendChild(deleteButton);
        todoListContainer.appendChild(todoItem);
    });
}

// initial todo list
renderTodoList();

