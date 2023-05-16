const express = require("express");
const router = express.Router();
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

router.get("/", getTodo);
router.post("/save", saveTodo);
router.patch("/update", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
