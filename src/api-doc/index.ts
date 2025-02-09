import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { getUsers } from "./handlers/user";
import { getUsersRoute } from "./routes/user";

export const api = new OpenAPIHono();

api
  .openapi(getUsersRoute, getUsers)
  .doc("/specification", {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
    },
  })
  .get(
    "/",
    swaggerUI({
      url: "/api-doc/specification",
    })
  );
