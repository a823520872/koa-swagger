class CommonController {
    success(res) {
        return {
            code: 1,
            data: res,
            msg: '请求成功'
        }
    }
    fail(msg) {
        return {
            code: 0,
            data: null,
            msg: msg.toString() || msg
        }
    }
}

module.exports = CommonController
