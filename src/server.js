
var http = require('http'),
    url = require('url')

function start(route, handle) {

  var port = 8888
  
  var onRequest = function (request, response) {
    var pathname = url.parse(request.url).pathname,
        postData = ''
    console.log('Request for \'' + pathname + '\' received.')

    request.setEncoding('utf8')

    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk
      console.log('Received POST data chunk \'' + postDataChunk + '\'.')
    })

    request.addListener('end', function() {
      route(handle, pathname, response, postData)
    })

  }

  http.createServer(onRequest).listen(port)
  console.log('Server has started on port ' + port + '.')
}

exports.start = start
