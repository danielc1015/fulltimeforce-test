import React, { useEffect } from "react";
import { CommitItem } from "./CommitItem";
import { useCommits } from "../../../hooks/useCommits";
import { Commit } from "../../../types/commit";
import { Tag } from "../../../components/ui/Tag";
import { Spinner } from "../../../components/ui/Spinner";

export function CommitList() {
  const { commits, getCommits, loading } = useCommits();

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <>
      <Tag text={"Listing " + commits.length + " Commits"} color="blue" />
      {!loading && commits.map((commit: Commit) => (
        <CommitItem key={commit.sha} commit={commit} />
      ))}
      {loading && <Spinner />}
    </>
  );
}
