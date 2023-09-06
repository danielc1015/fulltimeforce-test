import React from "react";
import { CommitItem } from "./CommitItem";

export function CommitList() {
  const commits = [
    {
      id: "1",
      title: "Commit 1",
      body: "Commit 1 Body",
    },
  ];

  return (
    <>
      {commits.map((commit) => (
        <CommitItem key={commit.id} commit={commit} />
      ))}
    </>
  );
}
