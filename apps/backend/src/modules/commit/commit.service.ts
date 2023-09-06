import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class CommitService {
  @Get()
  getCommits() {
    return;
  }
}
