import { pool } from "./database/connection.js"

export const agregarPost = async (titulo, img, descripcion, likes) => {
  const consulta = `
    INSERT INTO posts (titulo, img, descripcion, likes)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  return result.rows[0]; // devolvemos el nuevo post
};
