const jwt = required('jsonwebtoken')
const env = required('../.env')

module.export = (re, res, next) => {
    // CORS prefligth request
    if(req.method === 'OPTIONS'){
        next()
    }else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if(!token){
            return res.status(403).send({errors: ['Token não informado']})
        }
        
        jwt.verify(token, env.authSecret, function(er, decoded){
            if(err){
                return res.status(403).send({
                    errors: ['Falha ao validar token.']
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
    }
}