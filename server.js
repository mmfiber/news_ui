const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist"));
try {
  app.listen(3000);
  console.log("app is running on PORT: 3000")
} catch(e) {
  console.log("app is already running on PORT: 3000")
}
