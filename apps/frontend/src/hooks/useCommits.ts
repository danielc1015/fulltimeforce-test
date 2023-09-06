import { useState } from "react";
import { searchCommits } from "../services/commitService";
import { Commit } from "../types/commit";

export function useCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(false);

  const getCommits = async () => {
    setLoading(true);
    const commits = await searchCommits();
    setCommits(commits);
    setLoading(false);
  };

  return { commits, getCommits, loading };
}