const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Handle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    SKU: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    Grams: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Compare_Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Barcode: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  );
};
