const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  if (!req.files || Object.keys(req.files).length == 0) {
    res.send("No file uploaded...");
  }

  const folder = __dirname + "/../public/files/";

  Object.keys(req.files).forEach((key) => {
    const filePath = folder + req.files[key].name;

    req.files[key].mv(filePath, (err) => {
      if (err) console.log(`Error : ${err}`);
      else console.log(`${req.files[key].name} is uploaded`);
    });
  });

  res.send(`${Object.keys(req.files).length} files uploaded..`);
});

module.exports = router;
