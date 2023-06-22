const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  hit: { type: DataTypes.BOOLEAN, defaultValue: false },
  discount: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING, minLength: 2 },
  category: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false, minLength: 5 },
  subtitle: { type: DataTypes.STRING, minLength: 5 },
  oldprice: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
  style: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  country : { type: DataTypes.STRING }
});

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user" },
});

module.exports = {
  Product,
  User,
};
