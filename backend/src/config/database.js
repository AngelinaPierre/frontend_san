const mongoose = require('mongoose') 
mongoose.Promise = global.Promise 
module.exports = mongoose.connect("mongodb://localhost/sanofi",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 