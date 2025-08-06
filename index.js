let newTask=document.querySelector('.newTask');
let menu=document.querySelector('.menu');


let addNewTask = ()=>{
    taskNew=newTask.value;
    menu.innerHTML +=`<div class="task">
                    <p>${taskNew}</p>
                    <input type="radio" class="radio">
                </div>`
}