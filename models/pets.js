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

// 宠物分页查询
const findPetsList = async (args) => {
  const {size,page} = args
  delete args.size
  delete args.page
  const result = await PetModel.findAll({
    where: args,
    offset: Number(size) * page,
    limit: Number(size),
  })
  const count = await PetModel.count()
  return {
    list: formatArray(result),
    totalCount: count
  }
}

// 删除宠物
const delPet = async args => {
  const result = await PetModel.destroy({
    where:args
  })
  return result
}
const updatePetInfo = async args => {
  const result = await PetModel.update(args,{
    where:{
      id:args.id
    }
  })
  return result[0]
}

module.exports = {
  createStrayPets,
  findAllPets,
  findOnePets,
  findPetsList,
  delPet,
  updatePetInfo
};
