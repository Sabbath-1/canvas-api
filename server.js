require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/forms", require("./routes/formRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server running ');
});
