const Router = require('koa-router')
const admins = require('./admins')
const adopt = require('./adopt')
const pets = require('./pets')
const user = require('./user')

const router = new Router()

router.use(admins.routes())
router.use(adopt.routes())
router.use(pets.routes())
router.use(user.routes())

module.exports = router