// const express = require("express");
// const serveStatic = require("serve-static");
// const path = require("path");
// app = express();
// app.use(serveStatic(path.join(__dirname, "dist")));
// const port = process.env.PORT || 80;
// app.listen(port);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 4000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/tasks/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});
