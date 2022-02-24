const { connectDb } = require("./connectDb");

exports.createTask = (req, res) => {
  const newTask = {
    task: req.body.task,
    done: false,
  };
  const db = connectDb();
  db.collection("tasks")
    .add(newTask)
    .then((doc) => {
      res.status(201).send(doc.id);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getTask = (req, res) => {
  const db = connectDb();
  db.collection("university-email-domains")
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

exports.updateTask = (req, res) => {
  const { taskId } = req.params;
  const isDone = req.body.isDone;
  const db = connectDb();
  db.collection("tasks")
    .doc(taskId)
    .update({ done: isDone })
    .then((doc) => res.status(202).send(doc))
    .catch((err) => res.status(500).send(err));
};
