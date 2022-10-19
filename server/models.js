const { DataTypes } = require('sequelize')
const { db } = require("./database")

  let Product = db.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
  })
  let Cart = db.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
  })

  Product.hasMany(Cart)
  Cart.belongsTo(Product)

  module.exports = {Product, Cart}