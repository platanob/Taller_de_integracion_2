const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!\n');
});

const port = 5000;
server.listen(port, () => {
  console.log(`Node.js server is listening on port ${port}`);
});
