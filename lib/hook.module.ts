import { DynamicModule, Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { HookMetadataAccessor } from './hook-metadata.accessor';
import { HookExplorer } from './hook.explorer';
import { HookOrchestrator } from './hook.orchestrator';
import { HookRegistry } from './hook.registry';
import { HookController } from './hook.controller';
import { HookConfig } from './interfaces';
import { HookService } from './hook.service';

@Module({
  imports: [DiscoveryModule],
  providers: [HookMetadataAccessor, HookOrchestrator],
  controllers: [HookController],
})
export class HookModule {
  static forRoot(config: HookConfig): DynamicModule {
    return {
      module: HookModule,
      providers: [
        { provide: 'HOOK_CONFIG', useValue: config },
        HookExplorer,
        HookRegistry,
      ],
      exports: [HookService],
    };
  }
}
