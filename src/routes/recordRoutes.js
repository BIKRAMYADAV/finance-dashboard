const recordController = require('../controllers/recordController')
const {authMiddleware} = require('../middlewares/authMiddleware')
const {allowRoles} = require('../middlewares/roleMiddleware')


module.exports = (app) => {
    app.post('/records',authMiddleware, allowRoles('admin'), recordController.createRecord)
    app.get('/records',authMiddleware, allowRoles('admin', 'viewer', 'analyst'), recordController.getRecord)
    app.patch('/records/:id',authMiddleware,allowRoles('admin'), recordController.updateRecord)
    app.delete('/records/:id',authMiddleware, allowRoles('admin'), recordController.deleteRecord)
}