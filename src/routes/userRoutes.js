const userController = require('../controllers/userController')
const {authMiddleware} = require('../middlewares/authMiddleware')
const {allowRoles} = require('../middlewares/roleMiddleware')

module.exports = (app) => {
    app.post('/user',authMiddleware, allowRoles('admin'),userController.createUser)
    app.get('/user',authMiddleware, allowRoles('admin'),userController.getUser)
    app.patch('/user/:_id',authMiddleware, allowRoles('admin'),userController.updateUser)
}