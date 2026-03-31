const express = require("express");
const app = express();
const PORT = 3000;

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());

// Use routes
app.use("/api", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});