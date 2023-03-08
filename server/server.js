const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todos = ["wash dishes", "vacuum", "take out garbage", "walk the dog", "grocery shopping"];

app.get('/api/todos', (req, res) => {
  res.status(200).send(todos);
});

app.post("/api/todos", (req, res) => {
  const { todo } = req.body;

  if(!todo){
    res.sendStatus(400);
  }else{
    todos.push(todo);
    res.status(200).send(todos);
  }
});


const PORT = 5051;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));