class CommonController {
    success(res) {
        return {
            code: 1,
            data: res
        }
    }
    fail(res) {
        return {
            code: 0,
            data: res
        }
    }
}

module.exports = CommonController
