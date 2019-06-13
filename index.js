const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const index = require('./routes/index.js')

app.use(index.routes()).use(index.allowedMethods())
app.listen(3000, () => {
    console.log('正在监听')
})
