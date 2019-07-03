const TagModel = require('../models/tag')

class TagService {
    async findAll(condition = {}) {
        return TagModel.findAll({
            where: condition
        })
    }
    async findById(id) {
        return TagModel.findByPk(id)
    }
    async create(name) {
        let id = await TagModel.count()
        return TagModel.create({
            id: id + 1,
            name: name
        })
    }
    async update(values, condition = {}) {
        return TagModel.update(values, {
            where: condition
        })
    }
    async destroy(condition = {}) {
        return TagModel.destroy({
            where: condition
        })
    }
}

module.exports = new TagService()
