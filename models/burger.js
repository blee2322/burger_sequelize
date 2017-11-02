module.exports = function(sequelize) {
  var burgers = sequelize.define("burgers", {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devour: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: Sequelize.DATE
  });
  return Burger;
};