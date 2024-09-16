const express = require("express");
const app = express();
const port = 4000; // <- 3000에서 다른 숫자로 변경

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (request, response) => {
  response.send('Hello World on EXPRESS');
})