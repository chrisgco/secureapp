const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  response.write('<center><h1>Here\'s a Nice Image</h1></center>');
  response.write('<img width="100%" src="https://source.unsplash.com/random" />');
  response.end();
});

server.listen(PORT, HOST);

console.log(`Sails Lifted at ${HOST}:${PORT}`);
