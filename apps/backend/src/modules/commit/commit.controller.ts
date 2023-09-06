import { Controller, Get } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get()
  async getCommits() {
    return await this.commitService.getCommits();
  }
}
