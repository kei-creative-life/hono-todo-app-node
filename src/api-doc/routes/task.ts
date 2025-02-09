import { createRoute } from "@hono/zod-openapi";
import { Task } from "@/api-doc/schemas/task.js";
import { Error } from "@/api-doc/schemas/error.js";
import { z } from "@hono/zod-openapi";
import { OpenAPIHono } from "@hono/zod-openapi";
import { getTasks } from "@/api-doc/handlers/task.js";
import { Pagination } from "@/api-doc/schemas/pagination.js";
export const getTasksRoute = createRoute({
  method: "get",
  tags: ["Task"],
  summary: "タスク一覧を取得する",
  operationId: "getTasks",
  path: "/",
  request: {
    query: Pagination,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(Task),
        },
      },
      description: "Success",
    },
    500: {
      content: {
        "application/json": {
          schema: Error,
        },
      },
      description: "Internal Server Error",
    },
  },
});

export const taskApi = new OpenAPIHono();

taskApi.openapi(getTasksRoute, getTasks);
