import { getUsersRoute, getUserRoute } from "@/api-doc/routes/user.js";
import type { User } from "@/api-doc/schemas/user.js";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

type UserList = z.infer<typeof User>;

export const getUsers: RouteHandler<typeof getUsersRoute, {}> = async (c) => {
  try {
    const users: UserList[] = [
      {
        id: 1,
        name: "John Doe",
        age: 42,
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 30,
      },
    ];

    return c.json(users, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "Internal Server Error", stackTrace: e }, 500);
  }
};

export const getUser: RouteHandler<typeof getUserRoute, {}> = async (c) => {
  try {
    const user = { id: 1, name: "John Doe", age: 42 };
    return c.json(user, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "Internal Server Error", stackTrace: e }, 500);
  }
};
