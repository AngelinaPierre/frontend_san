const express = require('express')

module.exports = function(server){
    //Api Routes
    const router = express.Router()
    server.use('/api', router)

    //todo routes
    const sanofiService = require('../api/sanofi/sanofiService')
    //registrando rotas - registro dos verbos http?
    sanofiService.register(router,'/sanofis')
}