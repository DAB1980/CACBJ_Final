const checkParams = (req, res, next) => {
    
    if (isNaN(req.params.id)){
        
        return res.json({
            error_code: 1,
            error_desc: 'Formato de id inválido'
        })
    }
    
    
    next()
}

export const middlewares = {
    checkParams
}