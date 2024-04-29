// regular expression
// crud
let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task}</td>
        <td>
          <button onclick="deleteTask(${index})">Delete</button>
        </td>
      `;
        taskList.appendChild(row);
    });
}
// 

