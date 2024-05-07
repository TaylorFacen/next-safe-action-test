"use client";

import { testAction } from "./actions/test-action";

export default function Page() {
  return (
    <button onClick = { async () => {
      const response = await testAction();
      console.log(response)
    } }>Trigger Server Action</button>
  )
}