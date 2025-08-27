require("reflect-metadata");
const { DataSource } = require("typeorm");
const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "",
  database: "react",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.js"],
  migrations: ["src/migration/*.js"],
});


module.exports = { AppDataSource };
