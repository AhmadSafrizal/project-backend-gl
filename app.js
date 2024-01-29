const express = require("express");
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const produkRouter = require("./routes/produk");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(router);
app.listen(4000, () => {
  console.log("Server started on port 4000");
});

app.use("/produk", produkRouter);
//app.use("/user", userRouter);
//app.use("/order", orderkRouter);


module.exports = app;
