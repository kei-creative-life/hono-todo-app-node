import { createRoute } from "@hono/zod-openapi";
import { User } from "@/api-doc/schemas/user.js";
import { Error } from "@/api-doc/schemas/error.js";
import { z } from "@hono/zod-openapi";
import { OpenAPIHono } from "@hono/zod-openapi";
import { getUsers, getUser } from "@/api-doc/handlers/user.js";
import { Pagination } from "@/api-doc/schemas/pagination.js";

export const getUsersRoute = createRoute({
  method: "get",
  tags: ["User"],
  summary: "ユーザー一覧を取得する",
  operationId: "getUsers",
  path: "/",
  request: {
    query: Pagination,
  },
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

export const getUserRoute = createRoute({
  method: "get",
  tags: ["User"],
  summary: "特定のユーザー情報を取得する",
  operationId: "getUser",
  path: "/{id}",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: User,
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

export const userApi = new OpenAPIHono();

userApi.openapi(getUsersRoute, getUsers);
userApi.openapi(getUserRoute, getUser);
