import { Get, Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { Commit } from './types/commit';

@Injectable()
export class CommitService {
  private octokit = new Octokit({});
  private owner: string = 'danielc1015';
  private repo: string = 'fulltimeforce-test';

  async getCommits(): Promise<Commit[]> {
    const commitsResponse = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits',
      {
        owner: this.owner,
        repo: this.repo,
        order: 'desc',
      },
    );

    const commits: Commit[] = commitsResponse.data.map((commit) => {
      return {
        sha: commit.sha,
        node_id: commit.node_id,
        commit: {
          author: {
            name: commit.commit.author.name,
            email: commit.commit.author.email,
            date: commit.commit.author.date,
          },
          message: commit.commit.message,
          url: commit.commit.url,
          comment_count: commit.commit.comment_count,
        },
      };
    });
    return commits;
  }
}
