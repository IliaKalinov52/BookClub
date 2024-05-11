const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Order }) {
      this.belongsToMany(User, { through: 'Carts', foreignKey: 'boxId' });
      this.belongsToMany(Order, { through: 'Order_Items', foreignKey: 'orderId' });
    }
  }
  Box.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Box',
  });
  return Box;
};
