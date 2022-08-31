import mysql, { Pool } from "mysql2/promise";

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "root",
      database: "solid_example",
    });
  }

  public async execute(sql: string, values: any) {
    const result = await Connection.connection.query(sql, values);
    return result;
  }
}

export default new Connection();
