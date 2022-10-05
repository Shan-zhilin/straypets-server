const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    province: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "province"
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "city"
    },
    county: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "county"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    },
    hasexperience: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hasexperience"
    },
    adoptway: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "adoptway"
    },
    appointtime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "appointtime"
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    }
  };
  const options = {
    tableName: "adopt",
    createdAt: false,
		updatedAt: false,
    comment: "",
    indexes: []
  };
  const AdoptModel = sequelize.define("adopt_model", attributes, options);
  return AdoptModel;
};