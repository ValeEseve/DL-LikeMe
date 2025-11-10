import { Pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

export const postsModel = {
  findAll,
};
