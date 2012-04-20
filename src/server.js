
var http = require('http')

function start() {

  var port = 8888
  
  function onRequest(request, response) {
    console.log('Request received.')
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello World')
    response.end()
  }

  http.createServer(onRequest).listen(port)
  console.log('Server has started on port ' + port + '.')
}

exports.start = start
