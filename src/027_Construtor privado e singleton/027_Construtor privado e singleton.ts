class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) { }

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const dataBase1 = Database.getDataBase('localhost', 'Augusto', '12345');
dataBase1.connect();
const dataBase2 = Database.getDataBase('localhost', 'Augusto', '12345');
dataBase2.connect();

console.log(dataBase1 === dataBase2);

export default 1;
