import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(
  express.static(__dirname, {
    index: "index.html",
  }),
);

app.listen(port, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on 0.0.0.0:${port}`);
});
