document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const listItem = event.target.closest("li");
            taskList.removeChild(listItem);
        }
    });
});
