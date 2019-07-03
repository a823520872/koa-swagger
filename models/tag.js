const Sequelize = require('sequelize')

const sequelize = require('./mysql')

const Tag = sequelize.define(
    'tag',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true
            // autoIncrement: true,
            // defaultValue: 1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 't_tag',
        paranoid: true
    }
)

module.exports = Tag
