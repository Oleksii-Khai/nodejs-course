const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const url = req.url;
  if (url === '/about') {
    res.write('<h1>About us page</h1>');
    res.end();
  } else if (url === '/contact') {
    res.write('<h1>Contact us page</h1>');
    res.end();
  } else {
    res.write('<h1>Hello world!</h1>');
    res.write('<h2>My name Oleksii!</h2>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
