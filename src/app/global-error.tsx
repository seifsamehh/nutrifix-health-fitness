"use client";

import React from "react";

function handleReset(reset: () => void) {
  return () => reset();
}

const GlobalError = React.memo(function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <>
      <section className="error bg-red-600 text-white min-h-screen flex justify-center items-center flex-col gap-4">
        <h2>Something went wrong!</h2>
        <button
          onClick={handleReset(reset)}
          className="bg-white text-black py-2 px-4 rounded"
          id="retry"
          title="Try again"
          aria-label="Try again"
        >
          Try again
        </button>
      </section>
    </>
  );
});

export default GlobalError;
