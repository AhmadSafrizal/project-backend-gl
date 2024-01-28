const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");

const produkRouter = require("./routes/produk");

const app = express();
app.use(router);
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
app.use("/produk", produkRouter);

module.exports = app;
 