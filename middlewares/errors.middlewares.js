const errorData = (req) => ({
    incompleteEndpoint: {
        error_code: 4,
        error_desc: 'Hubo un error en la solicitud a esta ruta',
        endpoint: req.url,
        method: req.method
    },
    productNotExist: {
        error_code: 3,
        error_desc: 'Noticia inexistente'
    },
    notConnected: {
        error_code: 10,
        error_desc: 'Problemas con la DB'
    },
    unexpected: {
        error_code: 2,
        error_desc: 'Error desconocido'
    }
})

const errorController = (err, req, res, _) => {
    const errorCode = parseInt(err.message)
    const error = errorData(req)
    console.log(err)

    res.status(500)

    switch (errorCode) {
        case 3:
            res.json(error.noticiaNotExist)
            break;
        case 4:
            res.json(error.incompleteEndpoint)
            break;
        case 10:
            res.json(error.notConnected)
            break;
        default:
            res.json(error.unexpected);
    }
}

export const middlewares = {
    errorController
}