# NSGridDemo Client

This is the standalone client-side version of NSGridDemo.

The runnable application is under `src`.

The original project is retained under `original-reference` so existing commented, unused, Java, JSP, Eclipse, Maven, and other reference code is not lost. Nothing under `original-reference` is used by the client build.

## Development

Requires Node.js 18 or newer.

```bash
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
```

Deploy the contents of `dist` to any static web server.

## Preview production build

```bash
npm run preview
```

Open `http://localhost:4173`.
