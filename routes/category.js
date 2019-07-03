const router = require('koa-router')()
const CategoryController = require('../controllers/category.js')

router.get('/', CategoryController.index)

router.post('/add', CategoryController.create)

router.post('/update', CategoryController.update)

router.get('/del', CategoryController.del)

router.get('/:id', CategoryController.show)

module.exports = router
