const route = require('koa-router')()
// const home = require('./home')
const category = require('./category')
const tag = require('./tag')

route.get('/', async ctx => {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
})
route.post('/', async ctx => {
    let postData = ctx.request.body
    ctx.body = postData
})
route.use('/category', category.routes()).use(category.allowedMethods())
route.use('/tag', tag.routes()).use(tag.allowedMethods())

module.exports = route
