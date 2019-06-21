const CommonController = require('./common')
const CategoryService = require('../services/category')

class CategoryController extends CommonController {
    async index(ctx) {
        try {
            const result = await CategoryService.findAll(ctx.query)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async create(ctx) {
        try {
            console.log(ctx.request.header)
            const result = await CategoryService.create(ctx.request.body.name)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async show(ctx) {
        try {
            const result = await CategoryService.findById(ctx.params.id)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async update(ctx) {
        try {
            const { id, ...params } = ctx.request.body
            const result = await CategoryService.findById(id)
            if (result) {
                await CategoryService.update(params, { id })
                ctx.body = super.success({})
            } else {
                ctx.body = super.fail({}, '数据不存在')
            }
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async del(ctx) {
        console.log(1)
        try {
            const id = ctx.query.id
            console.log(id)
            const result = await CategoryService.findById(id)
            if (result) {
                await CategoryService.destroy({ id })
                ctx.body = super.success({})
            } else {
                ctx.body = super.fail({}, '数据不存在')
            }
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
}

module.exports = new CategoryController()
