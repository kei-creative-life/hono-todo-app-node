import { z } from "@hono/zod-openapi";

export const PaginationSchema = z
  .object({
    page: z.number().openapi({
      example: 1,
    }),
    limit: z.number().openapi({
      example: 10,
    }),
  })
  .openapi("PaginationSchema");

export const Pagination = PaginationSchema.openapi("Pagination");
