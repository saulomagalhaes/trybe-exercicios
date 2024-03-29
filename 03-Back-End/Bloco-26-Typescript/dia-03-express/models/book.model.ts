import { Pool, ResultSetHeader } from "mysql2/promise";
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]>{
    const result = await this.connection.query('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.query<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }

  public async getById(id: number): Promise<Book> {
    const result = await this.connection.query(
      'SELECT * FROM books WHERE id = ?',
      [id],
    );
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }

  public async update(id: number, book: Book) {
    const { title, price, author, isbn } = book;
    await this.connection.query(
      'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
      [title, price, author, isbn, id]
    );
  }

  public async remove(id: number) {
    await this.connection.query(
      'DELETE FROM books WHERE id=?',
      [id],
    );
  }
}