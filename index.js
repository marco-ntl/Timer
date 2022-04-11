/*
    Listen au port 3456, et sert la page index.html
*/
const PORT = 3456;

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let file = 'index.html'
    if(req.url?.includes('mp3'))
        file = 'beep.mp3'
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(file).pipe(res)
})

server.listen(PORT, '0.0.0.0')