const liveServer = require('live-server')

const params = {
  port: 8181,
  watch: ['dist', 'index.html'],
  file: 'index.html',
  open: true
  // wait: 1000
}

liveServer.start(params)
