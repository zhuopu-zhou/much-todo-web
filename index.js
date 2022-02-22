//import library for api
const express = require("express");
const cors = require("cors");
//import function used for api
const {createTask,getTask,updateTask}= require("./src/tasks")

const app = express();
app.use(cors()); //cross origin resource sharing
app.use(express.json()); //allow pass data in json format

//Routes
app.post("/tasks", createTask);//add task to DB(database)
app.get("/tasks", getTask);//get tasks from DB 
app.patch("/tasks/:taskId", updateTask);//update task to DB

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
