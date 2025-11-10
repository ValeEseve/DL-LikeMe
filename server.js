import express from "express";
import cors from "cors";
import { postsModel } from "./models/post.model.js";
import { agregarPost } from "./consultas.js";

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

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const nuevoPost = await agregarPost(titulo, img, descripcion, likes);
    res.status(201).json(nuevoPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agregar el post" });
  }
});

