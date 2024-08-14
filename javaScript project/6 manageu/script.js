import TaskManager from "./classes/TaskManager.js";

let taskManager = new TaskManager();

window.addNewTask = function addNewTask() {
  let description = document.getElementById("description").value;
  if (description) {
    taskManager.addTask(description);
    localStorage.setItem("taskManager", JSON.stringify(taskManager.tasks));
    document.getElementById("description").value = "";
    showTasks();
  }
};
function showTasks() {
  taskManager.tasks = JSON.parse(localStorage.getItem("taskManager")) || [];
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";
  for (const task of taskManager.tasks) {
    if (task.completed) {
      document.getElementById(
        "completedTasks"
      ).innerHTML += `<div class="mb-3 d-flex justify-content-center"><li class="list-group-item w-50 rounded-3 text-decoration-line-through">${task.description}</li><button onclick="completeTask(${task.id})" class="btn btn-success ms-1" type="button" disabled><i
          class="fa-solid fa-check"></i></button><button onclick="updateTaskDescription(${task.id})" class="btn btn-primary ms-1" type="button" disabled><i class="fa-solid fa-pencil"
          style="color: #ffffff;"></i></button><button onclick="deleteTask(${task.id})" class="btn btn-danger ms-1" type="button"><i
          class="fa-solid fa-trash-can" style="color: #ffffff;"></i></button></div>`;
    } else {
      document.getElementById(
        "activeTasks"
      ).innerHTML += `<div class="mb-3 d-flex justify-content-center"><li class="list-group-item w-50 rounded-3">${task.description}</li><button onclick="completeTask(${task.id})" class="btn btn-success ms-1" type="button"><i
          class="fa-solid fa-check"></i></button><button onclick="updateTaskDescription(${task.id},'${task.description}')" class="btn btn-primary ms-1" type="button"><i class="fa-solid fa-pencil"
          style="color: #ffffff;"></i></button><button onclick="deleteTask(${task.id})" class="btn btn-danger ms-1" type="button"><i
          class="fa-solid fa-trash-can" style="color: #ffffff;"></i></button></div>`;
    }
    console.log(taskManager.tasks);
  }
}
showTasks();

window.completeTask = function completeTask(id) {
  taskManager.completeTask(id);
  localStorage.setItem("taskManager", JSON.stringify(taskManager.tasks));
  showTasks();
};
window.updateTaskDescription = function updateTaskDescription(id, oldDesc) {
  let newDescription = prompt("Enter new description:", oldDesc);
  if (newDescription) {
    taskManager.updateTaskDescription(id, newDescription);
    localStorage.setItem("taskManager", JSON.stringify(taskManager.tasks));
    showTasks();
  }
};
window.deleteTask = function deleteTask(id) {
  taskManager.deleteTask(id);
  localStorage.setItem("taskManager", JSON.stringify(taskManager.tasks));
  showTasks();
};
