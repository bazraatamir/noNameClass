const express = require("express");
const app = express();
const port = 3003;
const colors = require("colors");
const blogRouter = require("./router/blogRouter");
const connectDB = require("./config/db");

connectDB();
app.use(express.json());

app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log(`server aslaa ${port}`.bgGreen.white);
});
