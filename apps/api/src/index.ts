import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 4000;
app.get("/health", (req, res) => {
  return res.status(201).json({
    status: "ok",
    message: "backend health ok"
  });
});

app.listen(port, () => {
  console.log(`backend is working on port ${port}`);
});
