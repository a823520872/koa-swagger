const router = require('koa-router')()
const CategoryController = require('../controllers/category.js')

router.get('/', CategoryController.index)

router.post('/add', CategoryController.create)

router.get('/:id', CategoryController.show)

router.post('/update', CategoryController.update)

router.get('/delete', CategoryController.del)

module.exports = router
