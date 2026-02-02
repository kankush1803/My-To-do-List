let todos =[{text1: "Sample Task", completed: true},{text2: "Sample Task", completed: true},{text3: "Sample Task", completed: true}]
let btn = document.querySelector("button");
let userInput = document.querySelector('#task-input');
let box = document.querySelector('#box');
function addTodo() {
    const input = document.getElementById("task-input");
    const taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    text: taskText,
    completed: false
  };

  todos.push(newTask);
  input.value = "";
  renderTodos();
    const li = document.createElement("li");
  li.textContent = taskText;

  // mark task as completed
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}