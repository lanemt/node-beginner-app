
var http = require('http'),
    url = require('url')

function start(route, handle) {

  var port = 8888
  
  var onRequest = function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for \'' + pathname + '\' received.')

    route(handle, pathname)

    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello World')
    response.end()
  }

  http.createServer(onRequest).listen(port)
  console.log('Server has started on port ' + port + '.')
}

exports.start = start
