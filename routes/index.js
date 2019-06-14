const route = require('koa-router')()
// const home = require('./home.js')
const category = require('./category.js')

// route.use('/', home.routes())
route.use('/category', category.routes()).use(category.allowedMethods())

module.exports = route
