import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { userApi } from "@/api-doc/routes/user.js";
import { taskApi } from "@/api-doc/routes/task.js";

export const api = new OpenAPIHono();

api
  .route("/users", userApi)
  .route("/tasks", taskApi)
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
