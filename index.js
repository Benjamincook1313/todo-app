
const todos = document.getElementById("todos");
const todoForm = document.getElementById("add");
const item = document.querySelector("#newTodo");

function displayItems(obj){
  const listItem = document.createElement("li");
  listItem.textContent = obj.item;
  todos.appendChild(listItem);
}

function clear(){
  todos.innerHTML = '';
}

function getTodos(){
  clear();
  axios.get("http://localhost:5051/api/todo").then((result) => {
    result.data.forEach(todo => displayItems(todo));
  }).catch(err => console.log({err, message: "Problem getting todos"}));
};

function addTodo(e){
  e.preventDefault();
  clear();
  axios.post("http://localhost:5051/api/todo", {item: item.value}).then(result => {
    result.data.forEach(todo => displayItems(todo));
  }).catch(err => console.log(err));
};

getTodos();
todoForm.addEventListener("submit", addTodo);