import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient()
  .use(async ({ next }: any) => {
    console.log('Running function')
    const response = await next({ ctx: null });

    return response
  });