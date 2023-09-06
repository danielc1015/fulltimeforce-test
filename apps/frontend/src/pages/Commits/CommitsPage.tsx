import React from "react";
import { CommitList } from "./components/CommitList";

export default function CommitsPage() {
  return (
    <>
      <header>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          COMMIT HISTORY
        </h1>
      </header>

      <main>
        <CommitList />
      </main>
    </>
  );
}
