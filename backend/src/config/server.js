const port = 3003 // port
const bodyParser = require('body-parser') // parse of requisition body.
const express = require('express') // webserver runs on node.
const AllowCors = require('./cors')
// criando uma instancia do express e atribuindo a variavel server
const server = express() // instance saved in server var.

// middleware for requisitions
server.use(bodyParser.urlencoded({ // all req passes here
    extended: true,
}))
server.use(bodyParser.json())

// usando função, tbm podemos usar a arrow function (port, () => console.log(``))
server.use(AllowCors)
server.listen(port, function() {
    console.log(`BACKEND is running on | PORT:${port} |`)
})

module.exports = server
