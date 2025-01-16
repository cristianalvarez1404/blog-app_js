import { ConnectionMySQL } from "../../config/db.js";

export class MySqlConnector {
  constructor() {
    this.connection = this.connect();
  }

  user = {
    async getAll() {
      try {
        const [results, fields] = await connection.query(
          "SELECT * FROM student"
        );
        console.log(results); // Mostrar los resultados de la consulta
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    },
    async getById() {},
    async update(id, body) {},
    async delete(id) {},
  };

  blog = {
    async getAll() {},
    async getById() {},
    async update(id, body) {},
    async delete(id) {},
  };

  comment = {
    async getAll() {},
    async getById() {},
    async update(id, body) {},
    async delete(id) {},
  };

  async connect() {
    return await new ConnectionMySQL().connectingToMysql();
  }
  async disconnect() {
    await this.connection.close();
  }
}
