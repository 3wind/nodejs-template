const { MongoClient } = require('mongodb');
const url = "mongodb://用户名:密码@ip:port/数据库?directConnection=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});