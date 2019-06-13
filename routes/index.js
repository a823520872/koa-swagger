const route = require('koa-router')()
// const home = require('./home.js')
const catetgory = require('./category.js')

// route.use('/', home.routes())
route.use('/category', catetgory.routes())

module.exports = route