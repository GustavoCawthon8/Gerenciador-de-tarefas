function addTitle() {
    var titleInput = document.getElementById("title-input").value;
    if (titleInput !== "") {
        var taskList = document.getElementById("task-list");
        var title = document.createElement("h2");
        title.textContent = titleInput;
        taskList.appendChild(title);
        document.getElementById("title-input").value = "";
    }
}

function addTask() {
    var taskInput = document.getElementById("task-input").value;
    if (taskInput !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        li.textContent = taskInput;
        li.className = "task";
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        var completeButton = document.createElement("button");
        completeButton.textContent = "Completo";
        completeButton.onclick = function() {
            li.classList.toggle("complete");
        };
        var actionsDiv = document.createElement("div");
        actionsDiv.className = "actions";
        actionsDiv.appendChild(removeButton);
        actionsDiv.appendChild(completeButton);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);
        document.getElementById("task-input").value = "";
    }
}