const CategoryService = require('../services/category')

const CategoryController = {
    index() {
        return CategoryService.findAll()
    }
}

module.exports = CategoryController
