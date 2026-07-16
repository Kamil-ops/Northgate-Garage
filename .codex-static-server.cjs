const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(request.url.split("?")[0]);
  let file = path.join(root, pathname === "/" ? "index.html" : pathname);

  fs.stat(file, (error, stats) => {
    if (!error && stats.isDirectory()) file = path.join(file, "index.html");
    const type = types[path.extname(file).toLowerCase()];
    if (type) response.setHeader("Content-Type", type);
    fs.createReadStream(file)
      .on("error", () => {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/plain; charset=utf-8");
        response.end("Not found");
      })
      .pipe(response);
  });
}).listen(8000, "127.0.0.1");
