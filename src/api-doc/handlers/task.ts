import { getTasksRoute } from "@/api-doc/routes/task.js";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";
import { Task } from "@/api-doc/schemas/task.js";

type Task = z.infer<typeof Task>;

export const getTasks: RouteHandler<typeof getTasksRoute, {}> = async (c) => {
  try {
    const tasks: Task[] = [
      { id: 1, title: "洗濯する", completed: false },
      { id: 2, title: "料理する", completed: false },
    ];
    return c.json(tasks, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: "Internal Server Error", stackTrace: e }, 500);
  }
};
