const inputText = document.getElementById("text");
const addBtn = document.querySelector(".plusButton");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-li");
const clearCompleted = document.getElementById("clearCompleted");

const totalNumber_of_todos = document.querySelector(".totalTodos");
const completedTodos = document.querySelector(".completedTodos");
const activeTodos = document.querySelector(".activeTodos");
const itemsLeft = document.querySelector(".left-todo");

let totalTodos = 0;
let completed = 0;
let active = 0;

function updateCounters() {
  for (let i = 0; i < todoContainer.children.length; i++) {
    totalTodos = todoContainer.children.length;
    if (todoContainer.children.length !== 0) {
      if (
        todoContainer.children[i].children[0].children[1].classList.contains(
          "complete"
        )
      ) {
        completed++;
        active--;
      } else {
        active++;
      }

      totalNumber_of_todos.innerText = totalTodos;
      completedTodos.innerText = completed;
      activeTodos.innerText = active;
      itemsLeft.innerText = active;
    }
  }
}

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
  check.addEventListener("click", () => {
    check.classList.add("active-check");
    todoList.children[0].children[1].classList.add("complete");
    if (todoContainer.children.length !== 0) {
      updateCounters();
    }
  });
  let close = todoList.querySelector(".close");
  close.addEventListener("click", deleteTodo);

  inputText.value = "";
  updateCounters();
}

addBtn.addEventListener("click", addTodo);

deleteTodo = (e) => {
  // console.log(e.target.parentNode.previousSibling.previousSibling)
  if (
    e.target.parentElement.previousSibling.previousSibling.classList.contains(
      "complete"
    )
  ) {
    e.target.parentElement.parentElement.remove();
  } else {
    alert("You can only delete completed tasks");
  }
  if (todoContainer.children.length !== 0) {
    updateCounters();
  }
//   updateCounters();
};

deleteAllCompleted = () => {
  console.log("delete all completed");

  let allCompleted = document.querySelectorAll(".complete");
  for (let i = 0; i < allCompleted.length; i++) {
    allCompleted[i].parentElement.parentElement.remove();
  }
  updateCounters();
};

clearCompleted.addEventListener("click", deleteAllCompleted);
