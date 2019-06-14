const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const routes = require('./routes')

app.use(bodyparser())
app.use(routes.routes()).use(routes.allowedMethods())
app.listen(3000, () => {
    console.log('正在监听')
})
