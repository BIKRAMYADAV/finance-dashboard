const {userAPI, recordAPI} = require('./routes')

module.exports = (app) => {
    userAPI(app)
    recordAPI(app)
}