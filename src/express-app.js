const {userAPI} = require('./routes')

module.exports = (app) => {
    userAPI(app)
}