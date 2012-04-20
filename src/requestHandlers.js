
var start = function() {
  console.log('Request handler \'start\' was called.')
}

var upload = function() {
  console.log('Request handler \'upload\' was called.')
}

exports.start = start
exports.upload = upload

