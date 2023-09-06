import { useState } from "react";
import { searchCommits } from "../services/commitService";
import { Commit } from "../types/commit";

export function useCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);

  const getCommits = async () => {
    const commits = await searchCommits();
    setCommits(commits);
  };

  return { commits, getCommits };
}