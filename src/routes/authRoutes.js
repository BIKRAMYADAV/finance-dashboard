const authController = require('../controllers/authController')

module.exports = (app) => {
    app.post('/auth/register', authController.register)
    app.post('/auth/login',authController.login)
}