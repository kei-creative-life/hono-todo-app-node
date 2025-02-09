import { z } from "@hono/zod-openapi";

export const TaskSchema = z
  .object({
    id: z.number().openapi({
      example: 1,
    }),
    title: z.string().openapi({
      example: "洗濯する",
    }),
    completed: z.boolean().openapi({
      example: false,
    }),
  })
  .openapi("TaskSchema");

export const Task = TaskSchema.openapi("Task");
