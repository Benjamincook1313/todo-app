const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getTodos, addTodo } = require("./ctrl");

app.get('/api/todo', getTodos);
app.post("/api/todo", addTodo);


const PORT = 5051;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));