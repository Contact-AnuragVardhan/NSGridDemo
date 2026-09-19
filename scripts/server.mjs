import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer, request as httpRequest } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.argv[2] || "src");
const port = Number(process.argv[3] || process.env.PORT || 5173);
const host = process.env.HOST || "0.0.0.0";
const jsLibTarget = process.env.JSLIB_TARGET || "http://localhost:8080";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp"
};

function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = resolve(root, `.${normalize(requested)}`);
  return filePath.startsWith(root) ? filePath : null;
}

function proxyJSLib(req, res) {
  const targetUrl = new URL(req.url || "/", jsLibTarget);

  const proxyReq = httpRequest(
    {
      hostname: targetUrl.hostname,
      port: targetUrl.port || 80,
      path: `${targetUrl.pathname}${targetUrl.search}`,
      method: req.method,
      headers: {
        ...req.headers,
        host: targetUrl.host
      }
    },
    proxyRes => {
      res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
      proxyRes.pipe(res);
    }
  );

  proxyReq.on("error", error => {
    console.error(`JSLib proxy error: ${error.message}`);

    if (!res.headersSent) {
      res.writeHead(502, {
        "Content-Type": "text/plain; charset=utf-8"
      });
    }

    res.end("JSLib server is unavailable");
  });

  req.pipe(proxyReq);
}

const server = createServer(async (req, res) => {
  try {
    const requestUrl = req.url || "/";

    if (
      requestUrl === "/JSLib" ||
      requestUrl.startsWith("/JSLib/") ||
      requestUrl.startsWith("/JSLib?")
    ) {
      proxyJSLib(req, res);
      return;
    }

    const filePath = resolveRequestPath(requestUrl);

    if (!filePath) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const info = await stat(filePath);
    const target = info.isDirectory()
      ? join(filePath, "index.html")
      : filePath;

    res.writeHead(200, {
      "Content-Type":
        mimeTypes[extname(target).toLowerCase()] ||
        "application/octet-stream",
      "Cache-Control": "no-cache"
    });

    createReadStream(target).pipe(res);
  } catch {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Not Found");
  }
});

server.listen(port, host, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
  console.log(`Proxying /JSLib to ${jsLibTarget}/JSLib`);
});