"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <span>{error.message}</span>
        <button
          onClick={() =>
            startTransition(() => {
              refresh();
              reset();
            })
          }
        >
          Try again
        </button>
      </body>
    </html>
  );
}
