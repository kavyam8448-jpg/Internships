const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Welcome to the Home Page");
  } 
  else if (req.url === "/about") {
    res.end("This is the About Page");
  } 
  else if (req.url === "/contact") {
    res.end("Contact us at example@email.com");
  } 
  else {
    res.statusCode = 404;
    res.end("404 - Page Not Found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});