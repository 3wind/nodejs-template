/**
 * fs模块
 * fs.stat 检查是文件或目录是否存在
 * fs.mkdir 创建目录
 * fs.writeFile  创建并写入文件
 * fs.appendFile 追加写入文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名/移动文件
 * fs.rmdir 删除目录（目录下存在文件时不能直接删除，需要先删除目录下的文件）
 * fs.unlink 删除文件
 * fs.createReadStream 读取文件流
 * fs.createWriteStream 输出文件流
 * pipe 管道流 readStreamA.pipe(writeStreamB),从A写入B
 */

const fs = require("fs");

// 检查是文件或目录是否存在
fs.stat("./package.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("是文件");
});

// 创建目录
fs.mkdir("./files", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("创建成功");
});

// 创建并写入文件，如果文件存在，writeFile会覆盖原有文件
fs.writeFile("./file.txt", "你好fs", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("创建写入文件成功");
});

// 追加写入文件
fs.appendFile("./file2.txt", "你好fs 2", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("追加写入文件成功");
});

// 读取文件
fs.readFile("./file2.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("读取文件成功", data.toString());
});

// 读取目录
fs.readdir("../demo3", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("读取目录成功", data);
});

// 重命名 / 移动文件
fs.rename("./files/file.txt", "./files/index.txt", (err) => {
  if (err) {
    console.log("重命名失败", err);
    return;
  }
  console.log("重命名成功");
});
