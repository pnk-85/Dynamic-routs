const Seuelize = require('sequelize');

const sequilize = require('../util/database');

const CartItem = sequilize.define('cartItem', {
  id:{
    type : Seuelize.INTEGER,
    autoIncrement: true,
    allowNull : false,
    primaryKey : true
  },
  quantity : Seuelize.INTEGER
})

module.exports = CartItem;
