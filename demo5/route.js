const { request } = require("http");
const url = require("url");

const changeRes = (res) => {
  res.send = (data) => {
    res.writeHead(200, {
      "Content-Type": `text/html;charset='utf-8'`,
    });
    res.write("<head><meta charset='utf-8'></head>");
    res.end(data);
  };
};

const server = () => {
  let G = {};

  G._get = {};
  G._post = {};

  let app = (req, res) => {
    // 扩展res
    changeRes(res);

    let pathname = url.parse(req.url, true).pathname;

    // 获取请求类型
    let method = req.method.toLowerCase();

    if (G["_" + method][pathname]) {
      if (method === "get") {
        G._get[pathname](req, res);
      } else {
        // 获取post数据
        let postData = "";
        req.on("data", (chunk) => {
          postData += chunk;
        });
        req.end("end", () => {
          console.log("postData", postData);
          req.body = postData;
          G._post[pathname](req, res);
        });
      }
    } else {
      res.writeHead(404, {
        "Content-Type": `text/html;charset='utf-8'`,
      });
      res.write("<head><meta charset='utf-8'></head>");
      res.end("页面不存在");
    }
  };

  app.get = (str, cb) => {
    G._get[str] = cb;
  };

  app.post = (str, cb) => {
    G._post[str] = cb;
  };

  return app;
};

module.exports = server();
