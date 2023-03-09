const express = require("express");

const connection = require("./configs/db");
// const routes = require("./routes/Restaurent.controller");
const routes=require("./routes/Restaurent.controller")

const app = express();

app.use(express.json());
app.use("/", routes);

const PORT = process.argv[2] || 8080;
app.listen(PORT, () => {
  try {
    connection();
    console.log("Listening on port " + PORT);
  } catch (error) {
    console.log(error);
  }
});
