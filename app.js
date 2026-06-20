const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js + Express + Jenkins + Docker!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Application is running successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});