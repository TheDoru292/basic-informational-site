const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3007;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filePath =
    q.path === "/"
      ? "./index.html"
      : q.path.includes(".html")
      ? "." + q.path
      : "." + q.path + ".html";

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return fs.readFile("./404.html", (err, data) => {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.write(data);
        return res.end();
      });
    }
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Listening on https://${hostname}:${port}`);
});
