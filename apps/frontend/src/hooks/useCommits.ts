import { useState } from "react";
import { searchCommits } from "../services/commitService";
import { Commit } from "../types/commit";

export function useCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCommits = async () => {
    setLoading(true);
    try {
      const commits = await searchCommits();
      setCommits(commits);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { commits, getCommits, loading, error };
}
