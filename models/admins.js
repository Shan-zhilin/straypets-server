const sequelize = require('../config/db')
const AdminModel = require('../schema/admins')(sequelize)

const createAdmin = async (args) => {
  return await AdminModel.create(args)
}

module.exports = {
  createAdmin
}