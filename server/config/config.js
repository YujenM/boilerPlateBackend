require("dotenv").config({ path: "../../../.env" });

module.exports = {
  development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: console.log,

    pool: {
      max: 10,
      min: 2,
      acquire: 600000,
      idle: 30000,
    },
    define: {
      timestamps: true,
    },
  },
};
