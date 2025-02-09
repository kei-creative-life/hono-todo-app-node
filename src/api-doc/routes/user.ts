import { createRoute } from "@hono/zod-openapi";
import { User } from "@/api-doc/model/user.js";
import { Error } from "@/api-doc/model/error.js";
import { z } from "@hono/zod-openapi";

export const getUsersRoute = createRoute({
  method: "get",
  tags: ["User"],
  summary: "ユーザー一覧を取得する",
  operationId: "getUsers",
  path: "/users",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.array(User),
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
