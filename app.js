const express = require("express");
const app = express();
const connection = require("./db/connectDB");
const blogRouter = require("./router/blogRouter");
const commentRouter = require("./router/comment");
connection();
app.use(express.json());
app.use("/blogTest", blogRouter);
app.use("/comments", commentRouter);
app.listen(3000, () => {
  console.log(`server aslaa 3000 port`);
});
//mvc
