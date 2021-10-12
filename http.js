const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    }
    if(req.url === '/about') {
        res.write('This is our short history')
        res.end()
    }
    if(req.url === '/error')
    res.write(`
    <h1>Oops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href="./">Back home</a>
    `)
    res.end()
})

server.listen(5000)