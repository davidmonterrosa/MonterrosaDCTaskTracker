import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from "./localstorage.js";

// Id Section
const toDoListArea = document.getElementById("toDoListArea");
const inProgressListArea = document.getElementById("inProgressListArea");
const completedListArea = document.getElementById("completedListArea");

const addTaskModal = document.getElementById("addTaskModal");

const task = document.getElementById("task");
const priorityStatus = document.getElementById("priorityStatus");
const taskCategory = document.getElementById("taskCategory");
const dueDate = document.getElementById("dueDate");
const description = document.getElementById("description");

const saveTaskBtn = document.getElementById("saveTaskBtn");

// Variables
const initialValues = getFromLocalStorage();

// Function
const createTaskCards = (taskArray) => {
    toDoListArea.innerHTML = "";
    inProgressListArea.innerHTML = "";
    completedListArea.innerHTML = "";
    taskArray.map(taskItem => {
        const taskCard = document.createElement('div');
        taskCard.className = "p-4 mt-3.5 bg-slate-500 rounded-xl";

        const statusIndicator = document.createElement('div');
        const statusIcon = document.createElement('span');
        console.log(taskItem.PriorityStatus);
        if(taskItem.PriorityStatus == "high") {
            statusIndicator.className = "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-900 text-red-300";
            statusIndicator.innerText = "High";
            statusIcon.className = "w-2 h-2 me-1 bg-red-500 rounded-full"
        } else if (taskItem.PriorityStatus == "medium") {
            statusIndicator.className = "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-900 text-yellow-300";
            statusIndicator.innerText = "Medium";
            statusIcon.className = "w-2 h-2 me-1 bg-yellow-500 rounded-full"
        } else {
            statusIndicator.className = "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300";
            statusIndicator.innerText = "Low";
            statusIcon.className = "w-2 h-2 me-1 bg-blue-500 rounded-full";
        }

        const nameOfTask = document.createElement('h1');
        nameOfTask.className = "text-2xl mb-[-8px]";
        nameOfTask.innerText = taskItem.TaskName;

        const taskDueDate = document.createElement('small');
        taskDueDate.innerText = taskItem.DueDate;
        
        const hrLine = document.createElement('hr');
        
        const descriptionP = document.createElement('p');
        descriptionP.innerText = taskItem.Description;

        const editBtn = document.createElement('button');
        editBtn.className = "text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700 hover:bg-blue-600 focus:ring-blue-800";
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", () => {
            // editTask()
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900";
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
            removeFromLocalStorage(taskItem);
            taskCard.remove();
        })


        taskCard.appendChild(statusIndicator);
        statusIndicator.appendChild(statusIcon);
        taskCard.appendChild(nameOfTask);
        taskCard.appendChild(taskDueDate);
        taskDueDate.appendChild(hrLine);
        taskCard.appendChild(descriptionP);
        taskCard.appendChild(editBtn);
        taskCard.appendChild(deleteBtn);

        if(taskItem.TaskCategory == "TD") {
            toDoListArea.appendChild(taskCard);
        } else if (taskItem.TaskCategory == "IP") {
            inProgressListArea.appendChild(taskCard);
        } else {
            completedListArea.appendChild(taskCard);
        }

    });
}


// Event Listeners
saveTaskBtn.addEventListener("click", () => {
    console.log(`${task.value}`);
    console.log(`${taskCategory.value}`);
    console.log(`${priorityStatus.value}`);
    console.log(`${dueDate.value}`);
    console.log(`${description.value}`);
    const dataArray = getFromLocalStorage();
    const counter = dataArray.length;
    let taskObject = {
        Id: `${counter}`,
        TaskName: `${task.value}`,
        TaskCategory: `${taskCategory.value}`,
        PriorityStatus: `${priorityStatus.value}`,
        DueDate: `${dueDate.value}`,
        Description: `${description.value}`
    };

    saveToLocalStorage(taskObject);

    const tasks = getFromLocalStorage();
    createTaskCards(tasks);
});


// On Load
createTaskCards(initialValues);

