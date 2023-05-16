const todoModel = require("../models/todo");

module.exports.getTodo = async (req, res) => {
  const todo = await todoModel.find({});
  res.status(200).send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  const todo = new todoModel({
    text: text,
  });
  await todo.save();
  res.send(todo);
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  console.log("Update :", _id);
  todoModel
    .findByIdAndUpdate(_id, {
      text,
    })
    .then((todo) => res.send("Updated successfully..."))
    .catch((error) => res.send(error));
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  console.log("body----->", req.body);
  console.log("Backend deleteTodo called", id);
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((todo) => res.send("Deleted successfully..."))
    .catch((error) => res.send(error));
};
