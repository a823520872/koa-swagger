const CategoryModel = require('../models/category')

const CategoryService = {
    findAll(condition = {}) {
        return CategoryModel.findAll({
            where: condition
        })
    },
    findById(id) {
        return CategoryModel.findById(id)
    },
    insertOne() {},
    insertMany(list) {},
    updateOne() {},
    updateMany(condition = {}) {}
}

module.exports = CategoryModel
