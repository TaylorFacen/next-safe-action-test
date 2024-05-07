"use server"

import { z } from "zod";
import { actionClient } from "../lib/safe-action";

export const testAction = actionClient
  .schema(z.void())
  .action(async () => {
    return { random: Math.random()}
  });