
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const tableBody = document.querySelector("#userTable tbody");

  let users = [];
  let editingIndex = null;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;

    const user = { name, email, age, dob };

    if (editingIndex !== null) {
      users[editingIndex] = user;
      editingIndex = null;
    } else {
      users.push(user);
    }

    updateTable();
    form.reset();
  });

  function updateTable() {
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.dob}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            `;

      tableBody.appendChild(row);
    });
  }

  window.editUser = function (index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("age").value = user.age;
    document.getElementById("dob").value = user.dob;

    editingIndex = index;
  };

  window.deleteUser = function (index) {
    users.splice(index, 1);
    updateTable();
  };
});
