import { z } from "@hono/zod-openapi";

export const ErrorSchema = z
  .object({
    message: z.string().openapi({
      example: "Internal Server Error",
    }),
    code: z.string().openapi({
      example: "ServerError",
    }),
    stackTrace: z.any().openapi({
      example: "Stack Trace",
    }),
  })
  .openapi("ErrorSchema");

export const Error = ErrorSchema.openapi("Error");
