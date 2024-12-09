"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Add new tasks when button is clicked
  addTaskBtn.addEventListener("click", addTasks);

  // Add new tasks when Enter key is pressed
  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTasks();
    }
  });

  function addTasks() {
    const inputText = taskInput.value.trim();
    if (inputText === "") {
      alert("Task cannot be empty");
      return;
    }

    // Split tasks by comma, trim whitespace, and filter out empty tasks
    const tasks = inputText
      .split(",")
      .map((task) => task.trim())
      .filter((task) => task !== "");

    if (tasks.length === 0) {
      alert("No valid tasks to add");
      return;
    }

    tasks.forEach((task) => {
      const taskItem = createTaskItem(task);
      taskList.appendChild(taskItem);
    });

    taskInput.value = ""; // Clear input field
  }

  function createTaskItem(text) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskText = document.createElement("span");
    taskText.textContent = text;
    taskText.classList.add("task-text");

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskText);
    taskItem.appendChild(actions);

    return taskItem;
  }
});
