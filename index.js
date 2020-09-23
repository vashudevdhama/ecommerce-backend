require("dotenv/config");
const express = require("express");

const sequelize = require("./utils/database");
const nest = require("./utils/nest");
const BaseRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", BaseRouter);

app.use((req, res) => {
  return res.json({ data: null, error: "not found" });
});

const PORT = Number(process.env.PORT || 3000);

const connect = async () => {
  let err;
  let result;
  [err, result] = await nest(sequelize.authenticate());
  if (err) {
    console.error("Unable to connect to database.");
  } else {
    console.log("Connected to database.");
    app.listen(PORT, () => {
      console.log(`Express server started on port ${PORT}`);
    });
  }
};

connect();
