const recordController = require('../controllers/recordController')

module.exports = (app) => {
    app.post('/create', recordController.createRecord)
}