const { EntitySchema } = require("typeorm");
module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    createdAt: { type: "timestamp", createDate: true },
    updatedAt: { type: "timestamp", updateDate: true },
  },
});
