import React, { useEffect } from "react";
import { CommitItem } from "./CommitItem";
import { useCommits } from "../../../hooks/useCommits";
import { Commit } from "../../../types/commit";
import { Tag } from "../../../components/ui/Tag";

export function CommitList() {
  const { commits, getCommits } = useCommits();

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
      <Tag text={"Listing " + commits.length + " Commits"} color="blue" />
      {commits.map((commit: Commit) => (
        <CommitItem key={commit.sha} commit={commit} />
      ))}
    </>
  );
}
