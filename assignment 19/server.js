const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("Blog API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});