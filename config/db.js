const Sequelize = require('sequelize');

const sequelize = new Sequelize('stray_pets', 'root', 'fx123456', {
	dialect: 'mysql',
	timezone: '+08:00',
	// 添加这个配置 是为了返回给前端时间是以 标准格式返回
	dialectOptions: {
		dateStrings: true,
		typeCast: true
	}
});

module.exports = sequelize;