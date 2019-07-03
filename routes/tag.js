const router = require('koa-router')()
const TagController = require('../controllers/tag.js')

router.get('/', TagController.index)

router.post('/add', TagController.create)

router.post('/update', TagController.update)

router.get('/del', TagController.del)

router.get('/:id', TagController.show)

module.exports = router
