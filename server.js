const jsonServer = require("json-server");
const server = jsonServer.create();
const express = require("express");
const cors = require("cors");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(middleware);
server.use("/api", router);
server.listen(PORT, () => {
  console.log("JSON server started on ", PORT);
});
