
http = require 'http'
url = require 'url'

start = (route, handle) ->
  port = 8888
  
  onRequest = (request, response) ->
    pathname = url.parse(request.url).pathname
    console.log "Request for #{pathname} received."
    route handle, pathname, response, request

  http.createServer(onRequest).listen port
  console.log "Server has started on port #{port}."


exports.start = start
