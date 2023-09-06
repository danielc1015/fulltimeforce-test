export interface Commit {
    sha: string;
    node_id: string;
    commit: CommitInfo;
}

export interface CommitInfo {
    author: Author;
    message: string;
    url: string;
    comment_count: number;
}

export interface Author {
    name: string;
    email: string;
    date: string;
}