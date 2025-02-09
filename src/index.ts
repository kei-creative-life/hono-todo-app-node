import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { api } from "@/api-doc/index.js";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();
app.use(prettyJSON());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api-doc", api);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
