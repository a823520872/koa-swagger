const CategoryModel = require('../models/category')

class CategoryService {
    async findAll(condition = {}) {
        return CategoryModel.findAll({
            where: condition
        })
    }
    async findById(id) {
        return CategoryModel.findByPk(id)
    }
    async create(name) {
        let id = await CategoryModel.count()
        return CategoryModel.create({
            id: id + 1,
            name: name
        })
    }
    async update(values, condition = {}) {
        return CategoryModel.update(values, {
            where: condition
        })
    }
    async destroy(condition = {}) {
        return CategoryModel.destroy({
            where: condition
        })
    }
}

module.exports = new CategoryService()
