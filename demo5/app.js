const http = require("http"); // http服务
const app = require("./route");

// 启动http服务
http.createServer(app).listen(9529, "0.0.0.0");

app.get("/", (req, res) => {
  res.send("首页");
});

app.get("/login", (req, res) => {
  res.send("login by get");
});

app.post("/login", (req, res) => {
  res.send("login by post");
});

console.log("Server running at http://127.0.0.1:9529/ by nodemon");
