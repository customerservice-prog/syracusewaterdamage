import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 3000;

// Lead form (mirrors Cloudflare Pages function stub when not on Cloudflare)
app.post("/api/lead", (req, res) => {
  req.on("data", () => {});
  req.on("end", () => {
    res.status(200).json({ ok: true, received: true });
  });
  req.on("error", () => {
    res.status(400).json({ ok: false, error: "invalid_request" });
  });
});

app.use(
  express.static(__dirname, {
    index: "index.html",
  }),
);

app.listen(port, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on 0.0.0.0:${port}`);
});
