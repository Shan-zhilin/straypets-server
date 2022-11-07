const {
  DataTypes
} = require('sequelize');

const headPics= `https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_3.png;https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_6.png;https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_2.png;https://static.tuandongdong.cn/ui/mini-groupdd/avatar/base/fakeavatar_4.png`

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id"
    },
    petpics: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: '',
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "petpics"
    },
    variety: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "variety"
    },
    attention: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "attention"
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    headpics: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: headPics,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "headpics"
    },
    createtime: {
      type: DataTypes,
      allowNull: false,
      field: "createtime"
    },
    petname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "petname"
    },
    contact: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "contact"
    },
    contactphone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "contactphone"
    }
  };
  const options = {
    tableName: "pets",
    timestamps: true,
    createdAt: 'createtime',
		updatedAt: false,
  };
  const PetsModel = sequelize.define("pets_model", attributes, options);
  return PetsModel;
};