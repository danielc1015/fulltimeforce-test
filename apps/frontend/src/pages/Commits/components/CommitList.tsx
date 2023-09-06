import React, { useEffect } from "react";
import { CommitItem } from "./CommitItem";
import { useCommits } from "../../../hooks/useCommits";
import { Commit } from "../../../types/commit";

export function CommitList() {

  const {commits, getCommits } = useCommits();

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
      {commits.map((commit: Commit) => (
        <CommitItem key={commit.sha} commit={commit} />
      ))}
    </>
  );
}
