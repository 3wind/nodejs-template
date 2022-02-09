const express = require("express");
const multer = require("multer");
var cors = require("cors");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
const app = express();
const upload = multer({ dest: "uploads/" });

app.all(
  "/uploader",
  cors(corsOptions),
  upload.single("file"),
  function (req, res, next) {
    console.log("uploader", req.file);
    res.json({ message: "ok" });
  }
);

app.listen(9529, "0.0.0.0");
