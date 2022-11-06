const sequelize = require("../config/db");
const PetModel = require("../schema/pets")(sequelize);
const {formatArray} = require('../utils/format')

// 新增流浪宠物
const createStrayPets = async (args) => {
  return await PetModel.create(args);
};

// 查询所有宠物
const findAllPets = async () => {
  const result = await PetModel.findAll();

  if (!result) return { success: false, code: 200, msg: "查询失败" };
  return {
    success: true,
    code: 200,
    msg: "",
    data: formatArray(result),
  };
};

// 查询某一条宠物
const findOnePets = async (args) => {
  const result = await PetModel.findOne({
    where: {
      id: args.id,
    },
  });
  if (!result)
    return {
      success: false,
      code: 200,
      msg: "暂无查到该宠物",
    };

  return {
    success: true,
    code: 200,
    msg: "",
    data: result.dataValues,
  };
};

module.exports = {
  createStrayPets,
  findAllPets,
  findOnePets,
};
