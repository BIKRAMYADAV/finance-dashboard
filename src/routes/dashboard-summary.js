const dashboardController = require('../controllers/dashboardController')

module.exports = (app) => {
    app.get('/dashboard/summary', dashboardController.summary)
}