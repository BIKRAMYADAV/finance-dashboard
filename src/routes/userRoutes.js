const userController = require('../controllers/userController')
const {authMiddleware} = require('../middlewares/authMiddleware')
const {allowRoles} = require('../middlewares/roleMiddleware')
const limiter = require('../middlewares/rateLimiter')

module.exports = (app) => {
    app.post('/user',limiter,authMiddleware, allowRoles('admin'),userController.createUser)
    app.get('/user',authMiddleware, allowRoles('admin'),userController.getUser)
    app.patch('/user/:_id',authMiddleware, allowRoles('admin'),userController.updateUser)
}