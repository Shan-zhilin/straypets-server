const {
  DataTypes
} = require('sequelize');

const _headPics= `[
  "https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_3.png",
  "https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_6.png",
  "https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_2.png",
  "https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_4.png"
]`

module.exports = sequelize => {
  const attributes = {
    userphone: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userphone"
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
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
    usename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "usename"
    },
    headPics: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: _headPics,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "headPics"
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    u_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "u_id"
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    createdAt: false,
		updatedAt: false,
    indexes: []
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};