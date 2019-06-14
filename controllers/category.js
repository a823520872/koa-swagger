const CommonController = require('./common')
const CategoryService = require('../services/category')

class CategoryController extends CommonController {
    async index(ctx) {
        try {
            const result = await CategoryService.findAll(ctx.query)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
    async create(ctx) {
        try {
            const result = await CategoryService.create(ctx.request.body.name)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
    async show(ctx) {
        try {
            const result = await CategoryService.findById(ctx.params.id)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
    async update(ctx) {
        try {
            const { id, ...params } = ctx.request.body
            const result = await CategoryController.update(params, { id })
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
    async show(ctx) {
        try {
            const result = await CategoryService.findById(ctx.params.id)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
    async delete(ctx) {
        try {
            const result = await CategoryService.findById(ctx.request.body.id)
            ctx.body = super.success(result)
        } catch (error) {
            ctx.body = super.fail(result)
        }
    }
}

module.exports = new CategoryController()
