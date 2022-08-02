import { Pool } from "mysql2/promise";
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool){
      this.connection = connection;
  }

  public async getAll(): Promise<User[]>{
    const result = await this.connection.query('SELECT * FROM books');
    const [rows] = result;
    return rows as User[];
  }
}