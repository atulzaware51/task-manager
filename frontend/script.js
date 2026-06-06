function addTask(){

    let input=document.getElementById("taskInput");

    let task=input.value.trim();

    if(task===""){
        alert("Please enter a task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <span>${task}</span>

        <div class="task-buttons">

            <button class="complete-btn"
            onclick="toggleTask(this)">
            ✓
            </button>

            <button class="delete-btn"
            onclick="deleteTask(this)">
            ✕
            </button>

        </div>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    input.value="";
}

function toggleTask(button){

    let taskText=
    button.parentElement.previousElementSibling;

    taskText.classList.toggle("completed");
}

function deleteTask(button){

    let li=button.parentElement.parentElement;

    li.style.transform="translateX(100px)";
    li.style.opacity="0";

    setTimeout(()=>{
        li.remove();
    },300);
}