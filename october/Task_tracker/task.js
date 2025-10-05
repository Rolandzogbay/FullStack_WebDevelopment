const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to create a task
function createTask(taskText) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
  });

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);

  // Task Actions button
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.innerHTML = '<i class="fas fa-pen"></i>Edit';

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>Delete';

  // Edit button event
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask;
    }
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  taskItem.appendChild(taskLeft);
  taskItem.appendChild(taskActions);

  taskList.appendChild(taskItem);
}

// Add task when button clicked
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskText);
  taskInput.value = ""; 
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
