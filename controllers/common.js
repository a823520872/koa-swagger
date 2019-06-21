class CommonController {
    success(res) {
        return {
            code: 1,
            data: res,
            msg: '请求成功'
        }
    }
    fail(res = {}, msg) {
        return {
            code: 0,
            data: res,
            msg
        }
    }
}

module.exports = CommonController
