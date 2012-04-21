
http = require 'http'
url = require 'url'

start = (route, handle) ->
  port = 8888
  
  onRequest = (request, response) ->
    pathname = url.parse(request.url).pathname
    postData = ''
    console.log "Request for #{pathname} received."

    request.setEncoding 'utf8'

    request.addListener 'data', (postDataChunk) ->
      postData += postDataChunk
      console.log "Received POST data chunk #{postDataChunk}."
    
    request.addListener 'end', () ->
      route(handle, pathname, response, postData)


  http.createServer(onRequest).listen port
  console.log "Server has started on port #{port}."


exports.start = start
