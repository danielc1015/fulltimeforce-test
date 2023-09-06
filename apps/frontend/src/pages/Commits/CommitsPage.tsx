import React from "react";
import { CommitList } from "./components/CommitList";

export default function CommitsPage() {
  return (
    <>
      <header>
        <h1>Project commits</h1>
      </header>

      <main>
        <CommitList />
      </main>
    </>
  );
}
