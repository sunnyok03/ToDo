const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/ToDo";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection open ");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error occurs");
  });

app.use("/", todoRouter);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
