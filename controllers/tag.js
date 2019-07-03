const CommonController = require('./common')
const TagService = require('../services/tag')

class TagController extends CommonController {
    async index(ctx) {
        try {
            const result = await TagService.findAll(ctx.query)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async create(ctx) {
        try {
            const result = await TagService.create(ctx.request.body.name)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async show(ctx) {
        try {
            const result = await TagService.findById(ctx.params.id)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async update(ctx) {
        try {
            const { id, ...params } = ctx.request.body
            const result = await TagService.findById(id)
            if (result) {
                await TagService.update(params, { id })
                ctx.body = super.success(null)
            } else {
                ctx.body = super.fail('数据不存在')
            }
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
    async del(ctx) {
        try {
            const id = ctx.query.id
            const result = await TagService.findById(id)
            if (result) {
                await TagService.destroy({ id })
                ctx.body = super.success(null)
            } else {
                ctx.body = super.fail('数据不存在')
            }
        } catch (error) {
            ctx.body = super.fail(error)
        }
    }
}

module.exports = new TagController()
