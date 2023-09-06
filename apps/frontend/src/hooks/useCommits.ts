import { useState } from "react";
import { searchCommits } from "../services/commitService";

export function useCommits() {
  const [commits, setCommits] = useState([]);

  const getCommits = async () => {
    const commits = await searchCommits();
    setCommits(commits);
  };

  return { commits, getCommits };
}