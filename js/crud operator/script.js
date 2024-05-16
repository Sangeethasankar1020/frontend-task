
let todos = [];

function renderTodoList() {
  const tableBody = document.querySelector("#todoTable tbody");
  tableBody.innerHTML = ""; 

  todos.forEach((todo, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
                    <td>${todo}</td>
                    <td>
                        <button onclick="editTodo(${index})">Edit</button>
                        <button onclick="deleteTodo(${index})">Delete</button>
                    </td>
                `;
  });
}
function addTodo(event) {
  event.preventDefault(); 

  const todoInput = document.getElementById("todoItem");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    todos.push(todoText);
    renderTodoList();
    todoInput.value = ""; 
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodoList();
}

function editTodo(index) {
  const newTask = prompt("Enter new task:", todos[index]);
  if (newTask !== null) {
    todos[index] = newTask.trim();
    renderTodoList();
  }
}

document.getElementById("todoForm").addEventListener("submit", addTodo);

renderTodoList();