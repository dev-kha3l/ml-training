const http = require("http");
const express = require("express");
const app = express();
const Routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", Routes);

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
