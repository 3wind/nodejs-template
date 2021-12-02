const http = require("http"); // http服务
const url = require("url"); //url解析模块

// 启动http服务
http
  .createServer((req, res) => {
    console.log(req.url);

    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

    // 设置页面使用UTF-8编码，解决中文乱码
    res.write("<head><meta charset='UTF-8'></head>");

    res.write("this is nodejs 信息");

    //url模块测试
    if (req.url !== "/favicon.ico") {
      const params = url.parse(req.url, true).query;
      console.log(`url模块解析结果------姓名：${params.name}`);
    }

    // 结束响应
    res.end();
  })
  .listen(9529, "0.0.0.0");

console.log("Server running at http://127.0.0.1:9529/ by nodemon");

// 启动url模块测试
// const api = "http://wwww.wx.com?name=zhangSan&age=20";
// const params = url.parse(api, true).query;
// console.log(`url模块解析结果------姓名：${params.name}`);