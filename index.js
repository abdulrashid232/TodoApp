
const inputText = document.getElementById("text");
const addBtn = document.querySelector(".plusButton");
const todoContainer = document.querySelector(".todo-container");

function addTodo() {
    let todoList = document.createElement("div");
    // todoList.classList.add("todocoll");
    let todoText = inputText.value;
    if (todoText) {
        todoList.innerHTML = `
        <div class="todo-li">
        <div class="check"><img src="./images/icon-check.svg" alt=""></div>
        <p class="ptag">${todoText}</p>
        <button class="close"><img src="./images/icon-cross.svg" alt=""></button>
      </div>
      <div class="hr"></div>`;
        todoContainer.appendChild(todoList);
    }
   
    let check = todoList.querySelector(".check");
    check.addEventListener('click', () => {
        check.classList.add("active-check")
        todoList.children[0].children[1].classList.add("complete")
    })
    let close = todoList.querySelector(".close");
    close.addEventListener("click", deleteTodo);

    inputText.value = "";
}

addBtn.addEventListener("click", addTodo);

deleteTodo = (e) => {
    // console.log(e.target.parentNode.previousSibling.previousSibling)
    if (e.target.parentElement.previousSibling.previousSibling.classList.contains("complete")){
        e.target.parentElement.parentElement.remove();
    }else{
        alert("You can only delete completed tasks")
    }
    
}
