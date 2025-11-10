import express from "express";
import cors from "cors";
import { postsModel } from "./models/post.model.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, console.log(`Servidor ON http://localhost:${PORT} !`));

app.get("/posts", async (req, res) => {
  try {
    const posts = await postsModel.findAll();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
