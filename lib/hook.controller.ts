import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { HookOrchestrator } from './hook.orchestrator';

@Controller('hook')
export class HookController {
  constructor(private readonly hookOrchestrator: HookOrchestrator) {}

  @Post('/')
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/explicit-module-boundary-types
  async hooks(@Req() req: Request) {
    await this.hookOrchestrator.receiveHook(req);
  }
}
