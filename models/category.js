const Sequelize = require('sequelize')

const sequelize = require('./mysql')

const Category = sequelize.define(
    'category',
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true
            // autoIncrement: true
            // defaultValue: 1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 't_category',
        paranoid: true
    }
)

module.exports = Category
