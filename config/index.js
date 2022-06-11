const response = (res, code, message, data=null) => {
    let dataJson = {
        statusCode : code,
        message : message,
    }

    if(data !== null) {
        dataJson['data'] = data
    }

    return res.json(dataJson)
}

module.exports = response