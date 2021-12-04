const fs = require("fs");
const http = require("http"); // http服务
const url = require("url");
const path = require("path");
const myUtils = require("./utils");

// 启动http服务
http
  .createServer((req, res) => {
    let pathname = url.parse(req.url, true).pathname;
    pathname = pathname === "/" ? "/index.html" : pathname;

    //path.extname 用来获取文件后缀名
    let extname = path.extname(pathname);
    const contentType = myUtils.getContentType(extname);

    console.log("pathname", pathname, contentType);

    if (pathname !== "/favicon.ico") {
      fs.readFile(`.${pathname}`, (err, data) => {
        if (err) {
          console.log("readFile err---", err);
          res.writeHead(404, {
            "Content-Type": `${contentType};charset='utf-8'`,
          });
          res.write("<head><meta charset='utf-8'></head>");
          res.end("页面不存在");
        }
        res.writeHead(200, {
          "Content-Type": `${contentType};charset='utf-8'`,
        });
        res.end(data);
      });
    } else {
      res.end();
    }
  })
  .listen(9529, "0.0.0.0");

console.log("Server running at http://127.0.0.1:9529/ by nodemon");
