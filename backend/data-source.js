require("reflect-metadata");
const { DataSource } = require("typeorm");
const AppDataSource = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "AzenDev",
  password: "4223",
  database: "profile",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.js"],
  migrations: ["src/migration/*.js"],
  retryAttempts: 10,
  retryDelay: 3000,
});

module.exports = { AppDataSource };
