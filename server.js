import express from "express";
import cors from "cors";
import "dotenv.config";
import pkg from "pg";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const { Pool } = pkg;

export const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  allowExitOnIdle: true,
});

try {
await pool.query("SELECT NOW()");
console.log("Database connected");
} catch (error) {
console.log(error);
}

app = express();

app.use(express.json());
app.use(cors());

PORT = 3000;

app.listen(PORT, console.log(`Servidor ON http://localhost:${PORT} !`));

app.get("/", (req, res) => {});
