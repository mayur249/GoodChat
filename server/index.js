const express = require("express");
const cors = require("cors");
require("dotenv").config();

//routes
const authRoutes = require("./routes/auth")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello There");
});

//routes
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
