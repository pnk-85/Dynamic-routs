const Seuelize = require('sequelize');

const sequilize = require('../util/database');

const Cart = sequilize.define('cart', {
  id:{
    type : Seuelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey : true
  }
})

module.exports = Cart;
