import { DynamicModule, Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { HookMetadataAccessor } from './hook-metadata.accessor';
import { HookExplorer } from './hook.explorer';
import { HookOrchestrator } from './hook.orchestrator';
import { HookRegistry } from './hook.registry';
import { HookController } from './hook.controller';

@Module({
  imports: [DiscoveryModule],
  providers: [HookMetadataAccessor, HookOrchestrator],
  controllers: [HookController],
})
export class HookModule {
  static forRoot(): DynamicModule {
    return {
      module: HookModule,
      providers: [HookExplorer, HookRegistry],
    };
  }
}
