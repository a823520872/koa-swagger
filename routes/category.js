const router = require('koa-router')()
const CategoryController = require('../controllers/category.js')

router.get('/', async ctx => {
    const result = await CategoryController.index()
    ctx.body = result
})

router.get('/add', async ctx => {
    ctx.body = 'category add'
})

module.exports = router
