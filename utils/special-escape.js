import transform from 'vinyl-transform'
import map from 'map-stream'

module.exports = transform(function(filename) {
  return map(function(chunk, next) {
    return next(null, chunk.toString().replace(/(\r\n|\n|\r)/gm,'').replace(/"/g, '\\"'))
  })
})
