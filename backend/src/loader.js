const server = require('./config/server') // express, server.js config, start, port; -> public webservice
require('./config/database')
require('./config/routes')(server)
