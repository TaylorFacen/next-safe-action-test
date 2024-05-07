"use client";

import { testAction } from "./actions/test-action";
import { useAction } from 'next-safe-action/hooks';

export default function Page() {
  const { execute } = useAction(testAction, {
    onSuccess: ({ data }) => {
      alert(data.random)
    }
  });

  return (
    <button onClick = { async () => {
      const response = await testAction();
      console.log(response);
      execute()
    } }>Trigger Server Action</button>
  )
}