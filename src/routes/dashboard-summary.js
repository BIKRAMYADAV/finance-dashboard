const dashboardController = require('../controllers/dashboardController')
const {authMiddleware} = require('../middlewares/authMiddleware')
const {allowRoles} = require('../middlewares/roleMiddleware')


module.exports = (app) => {
    app.get('/dashboard/summary',authMiddleware,allowRoles('analyst', 'admin'), dashboardController.summary)
}