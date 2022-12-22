import { Status, Task } from "./task.js";
import { taskManag } from "./taskManager.js";
const task_input = document.getElementById("task_input");
const task_div = document.getElementById("task_div");
const add_btn = document.getElementById("add_btn");
task_input.focus();
add_btn.addEventListener("click", () => {
    if (task_input.value.length < 2) {
        document.querySelectorAll('p').forEach(p => p.remove());
        const p = document.createElement('p');
        p.classList.add('d-flex', 'justify-content-center', 'mt-2', 'text-danger');
        p.innerText = 'Please enter a task with at least 2 characters';
        task_div.appendChild(p);
        return;
    }
    const task = new Task(task_input.value);
    document.querySelectorAll('p').forEach(p => p.remove());
    taskManag.add(task);
    createTask(task);
    task_input.value = '';
});
function createTask(task) {
    const wrapper_taskDiv = document.createElement("div");
    wrapper_taskDiv.classList.add("wrapper2", "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-center", "ps-md-5", "pe-md-5");
    wrapper_taskDiv.id = task.timeStampId;
    const formDiv = document.createElement("div");
    formDiv.classList.add("p-md-3");
    const input = document.createElement("input");
    input.classList.add("task");
    input.placeholder = "Edit...";
    input.disabled = true;
    input.value = task.title;
    input.addEventListener("input", () => {
        task.title = input.value; //
    }); //
    const statusDiv = document.createElement("div");
    statusDiv.classList.add("status");
    statusDiv.innerHTML = task.status;
    const timeStampDiv = document.createElement("div");
    timeStampDiv.classList.add("time-stamp");
    timeStampDiv.innerHTML = task.timeStamp;
    const signsDiv = document.createElement("div");
    signsDiv.classList.add("w-25", "pb-2", "pb-md-0", "d-flex", "justify-content-evenly");
    const correct_sign = document.createElement("div");
    correct_sign.innerHTML = "&#10003";
    correct_sign.classList.add("weight", "font-size", "pointer");
    // correct_sign.id = task.timeStampId;
    correct_sign.addEventListener("click", () => {
        task.status = Status.Completed;
        input.classList.add('text-decoration-line-through');
        statusDiv.innerHTML = task.status;
        taskManag.edit(task);
    });
    const cross_sign = document.createElement("div");
    cross_sign.innerHTML = "&#x2718";
    cross_sign.classList.add("pointer");
    // cross_sign.id = task.timeStampId;
    cross_sign.addEventListener("click", () => {
        wrapper_taskDiv.remove();
        taskManag.delete(wrapper_taskDiv.id);
    });
    const edit_sign = document.createElement("div");
    edit_sign.innerHTML = "&#9998";
    edit_sign.classList.add("font-size", "pointer");
    // edit_sign.id = task.timeStampId;
    edit_sign.addEventListener("click", () => {
        task.title = input.value; //
        input.disabled = !input.disabled; // input.disabled = false;
        // input.disabled ? input.classList.remove('edit-task') : input.classList.add('edit-task');
        taskManag.edit(task);
    });
    task_div.appendChild(wrapper_taskDiv);
    wrapper_taskDiv.appendChild(formDiv);
    formDiv.appendChild(input);
    formDiv.appendChild(statusDiv);
    formDiv.appendChild(timeStampDiv);
    wrapper_taskDiv.appendChild(signsDiv);
    signsDiv.appendChild(correct_sign);
    signsDiv.appendChild(cross_sign);
    signsDiv.appendChild(edit_sign);
}
