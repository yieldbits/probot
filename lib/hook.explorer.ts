import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import * as _ from 'lodash';
import { HookMetadataAccessor } from './hook-metadata.accessor';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
import { HookOrchestrator } from './hook.orchestrator';

@Injectable()
export class HookExplorer implements OnModuleInit {
  private readonly logger = new Logger('HookExplorer');

  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataAccessor: HookMetadataAccessor,
    private readonly metadataScanner: MetadataScanner,
    private readonly hookOrchestrator: HookOrchestrator,
  ) {}

  onModuleInit() {
    this.explore();
  }

  explore() {
    const instanceWrappers: InstanceWrapper[] = [
      ...this.discoveryService.getControllers(),
      ...this.discoveryService.getProviders(),
    ];
    instanceWrappers
      .filter((wrapper) => wrapper.isDependencyTreeStatic())
      .forEach((wrapper: InstanceWrapper) => {
        const { instance } = wrapper;

        if (!instance || !Object.getPrototypeOf(instance)) {
          return;
        }

        this.metadataScanner.scanFromPrototype(
          instance,
          Object.getPrototypeOf(instance),
          (key: string) => this.lookupHooks(instance, key),
        );
      });
  }

  lookupHooks(instance: Record<string, () => any>, key: string) {
    const methodRef = instance[key];
    const hookMetadata = this.metadataAccessor.getWebhookEvents(methodRef);
    const hookFn = this.wrapFunctionInTryCatchBlocks(methodRef, instance);

    // filter functions that do not have a webhook event definition
    if (_.isEmpty(hookMetadata)) {
      return null;
    }

    return this.hookOrchestrator.addHook(hookFn, hookMetadata);
  }

  private wrapFunctionInTryCatchBlocks(
    methodRef: () => any,
    instance: Record<string, any>,
  ) {
    return async (...args: unknown[]) => {
      try {
        // @ts-ignore
        await methodRef.call(instance, ...args);
      } catch (error) {
        this.logger.error(error);
      }
    };
  }
}
