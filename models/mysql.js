const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:root@localhost:3306/swagger', {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true
    }
})

module.exports = sequelize
