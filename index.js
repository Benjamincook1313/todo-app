
const todos = document.getElementById("todos");

function getTodos(){
  axios.get("http://localhost:5051/api/todos").then((result) => {
    // console.log(result.data);
    result.data.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      todos.appendChild(listItem);
    });
  }).catch(err => console.log({err, message: "Problem getting todos"}));
};

function addTodo(e){
  
};

getTodos();