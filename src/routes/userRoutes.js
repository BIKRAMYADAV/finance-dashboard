const userController = require('../controllers/userController')

module.exports = (app) => {
    app.post('/user',userController.createUser)
    app.get('/user',userController.getUser)
    app.put('/user/:userId',userController.updateUser)
}