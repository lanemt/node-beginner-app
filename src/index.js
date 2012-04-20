
var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers')

var handle = {}
handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

server.start(router.route, handle)

