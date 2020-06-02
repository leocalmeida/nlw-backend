import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json({ ok: "leonardo" });
});
//apenas testando uma coisa no git

app.listen(3333);
