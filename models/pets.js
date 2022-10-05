const sequelize = require('../config/db')
const PetModel = require('../schema/pets')(sequelize)

// 新增流浪宠物
const createStrayPets = async (args) => {
  return await PetModel.create(args)
}

module.exports = {
  createStrayPets
}