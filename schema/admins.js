const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    adminname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "adminname"
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
    identity: {
      type: DataTypes.STRING(18),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "identity"
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
    admintype: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: 2,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "admintype"
    },
    checkstatus: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: 1,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "checkstatus"
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
    createdAt: false,
		updatedAt: false,
    tableName: "admins",
  };
  const AdminsModel = sequelize.define("admins_model", attributes, options);
  return AdminsModel;
};