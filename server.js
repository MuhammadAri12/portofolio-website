// Server statis sederhana untuk pratinjau portofolio
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 8123;

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(root, url === "/" ? "index.html" : url);
    if (!file.startsWith(root)) {
      res.writeHead(403);
      return res.end();
    }
    fs.stat(file, (err, stat) => {
      if (!err && stat.isDirectory()) file = path.join(file, "index.html");
      fs.readFile(file, (err2, data) => {
        if (err2) {
          res.writeHead(404);
          return res.end("Not found");
        }
        res.writeHead(200, {
          "Content-Type": mime[path.extname(file).toLowerCase()] || "application/octet-stream",
        });
        res.end(data);
      });
    });
  })
  .listen(port, () => console.log(`Server jalan di http://localhost:${port}`));
