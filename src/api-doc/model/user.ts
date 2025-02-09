import { z } from "@hono/zod-openapi";

export const UserSchema = z
  .object({
    id: z.number().openapi({
      example: 1,
    }),
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi("UserSchema");

export const User = UserSchema.openapi("User");
