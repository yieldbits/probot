import { DynamicModule, Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces';
import { DiscoveryModule } from '@nestjs/core';
import { HookMetadataAccessor } from './hook-metadata.accessor';
import { HookExplorer } from './hook.explorer';
import { HookOrchestrator } from './hook.orchestrator';
import { HookRegistry } from './hook.registry';
import { HookController } from './hook.controller';
import {
  HookConfig,
  HookConfigFactory,
  HookModuleAsyncOptions,
} from './interfaces';
import { HookService } from './hook.service';
import { HOOK_MODULE_ID, HOOK_MODULE_OPTIONS } from './hook.constant';
import { generateString, mergeDefaults } from './hook.utils';

@Module({
  imports: [DiscoveryModule],
  providers: [HookMetadataAccessor, HookOrchestrator],
  controllers: [HookController],
})
export class HookModule {
  static forRoot(config: HookConfig, global = false): DynamicModule {
    return {
      global,
      module: HookModule,
      providers: [
        { provide: 'HOOK_CONFIG', useValue: config },
        HookExplorer,
        HookRegistry,
      ],
      exports: [HookService],
    };
  }

  static forRootAsync(
    options: HookModuleAsyncOptions,
    global = false,
  ): DynamicModule {
    return {
      global,
      module: HookModule,
      imports: options.imports,
      providers: [
        ...this.createAsyncProviders(options),
        {
          provide: HOOK_MODULE_ID,
          useValue: generateString(),
        },
      ],
    };
  }

  private static createAsyncProviders(
    options: HookModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        // @ts-ignore
        provide: options.useClass,
        // @ts-ignore
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: HookModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: HOOK_MODULE_OPTIONS,
        useFactory: async (
          ...args: any[] // @ts-ignore
        ) => mergeDefaults(await options.useFactory(...args)),
        inject: [...(options.inject as any[]), HookExplorer, HookRegistry] || [
          HookExplorer,
          HookRegistry,
        ],
      };
    }
    return {
      provide: HOOK_MODULE_OPTIONS,
      useFactory: async (optionsFactory: HookConfigFactory) =>
        mergeDefaults(await optionsFactory.createConfig()),
      inject: [
        // @ts-ignore
        ...(options.useExisting || options.useClass),
        HookExplorer,
        HookRegistry,
      ],
    };
  }
}
