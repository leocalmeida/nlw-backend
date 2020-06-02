//01/06/2020
import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json({ ok: "leonardo" });
});

app.listen(3333);
