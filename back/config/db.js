import mysql from "mysql2/promise";

export class ConnectionMySQL {
  constructor() {
    this.connection = null;
  }

  async connectingToMysql() {
    const dataConnection = {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    };

    try {
      if (!this.connection) {
        this.connection = await mysql.createConnection(dataConnection);
        console.log("DB was connected successfully to MySQL");
        return this.connection;
      } else {
        return this.connection;
      }
    } catch (error) {
      console.error(error.message || "Error connecting to MySQL");
      throw error;
    }
  }

  closeConnection() {
    if (this.connection) {
      this.connection.end();
      console.log("DB connection closed successfully");
    }
  }
}
