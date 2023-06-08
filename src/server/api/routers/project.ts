import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '../trpc';

export const projectRouter = createTRPCRouter({
  test: protectedProcedure.input(z.object({ name: z.string().nullish() }).nullish()).query(async ({ ctx, input }) => {
    return `Hello ${input?.name}`;
  }),
});
