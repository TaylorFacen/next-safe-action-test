import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

export const actionClient = createSafeActionClient();

export const testAction = actionClient
  .schema(z.void())
  .action(async () => {
    return { random: Math.random()}
  });