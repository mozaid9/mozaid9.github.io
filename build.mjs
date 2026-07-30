import { cp, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("./dist/", import.meta.url);
const clientDirectory = new URL("./dist/client/", import.meta.url);
const serverDirectory = new URL("./dist/server/", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(clientDirectory, { recursive: true });
await mkdir(serverDirectory, { recursive: true });

await Promise.all([
  cp(new URL("./index.html", import.meta.url), new URL("./dist/client/index.html", import.meta.url)),
  cp(new URL("./style.css", import.meta.url), new URL("./dist/client/style.css", import.meta.url)),
  cp(new URL("./script.js", import.meta.url), new URL("./dist/client/script.js", import.meta.url)),
  cp(new URL("./og.png", import.meta.url), new URL("./dist/client/og.png", import.meta.url)),
  cp(new URL("./worker.js", import.meta.url), new URL("./dist/server/index.js", import.meta.url))
]);

console.log("Built static portfolio for deployment.");
