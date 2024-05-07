"use client";

import { testAction } from "./actions/test-action";
import { useAction } from 'next-safe-action/hooks'

export default function Page() {
  const { execute } = useAction(testAction, {
    onSuccess: ({ data }) => {
      alert(data.random)
    }
  })
  return (
    <button onClick = { () => execute() }>Trigger Server Action</button>
  )
}