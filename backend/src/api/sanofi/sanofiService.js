const Sanofi = require('./sanofi')

Sanofi.methods([
    'get','post','put','delete',
])
 
// tras a resposta atualizada
Sanofi.updateOptions({
    new: true,
    runValidators: true,
})
 
module.exports = Sanofi