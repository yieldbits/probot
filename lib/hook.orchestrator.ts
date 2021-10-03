import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import * as _ from 'lodash';
import { v4 } from 'uuid';
import { Request } from 'express';
import { HookRegistry } from './hook.registry';
import { EmitterWebhookEventName } from '@octokit/webhooks/dist-types/types';
import { Probot } from 'probot';
import { getPrivateKey } from '@probot/get-private-key';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class HookOrchestrator
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private readonly logger = new Logger('HookOrchestrator');

  private readonly hooks: Record<string, any> = {};

  private readonly probot: Probot;

  constructor(
    private readonly hookRegistry: HookRegistry,
  ) {
    this.probot = new Probot({
      appId: process.env.APP_ID,
      privateKey: getPrivateKey({
        env: { PRIVATE_KEY: process.env.PRIVATE_KEY },
      }) as string,
      secret: process.env.WEBHOOK_SECRET,
      baseUrl: process.env.GH_URL,
    });
  }

  onApplicationBootstrap(): any {
    this.mountHooks();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onApplicationShutdown(signal?: string): any {
    // TODO clear probot event handlers on shutdown
  }

  mountHooks() {
    this.probot
      .load((app: { on: (arg0: any, arg1: (context: any) => Promise<void>) => any; }) => {
        _.each(this.hooks, (options, key) => {
          options.ref = app.on(
            options.eventOrEvents,
            this.initContext(options.target),
          );
          this.hookRegistry.addHook(key, options.ref);
        });
      })
      .then(() => {
        this.logger.log('Hook event listeners initialized');
      })
      .catch(this.logger.error);
  }

  /**
   * This only adds the hooks to the {@link HookRegistry}.
   * It is still not connected to probot at this step.
   * Check {@link HookOrchestrator#mountHooks} for hook initialization.
   *
   * @param methodRef function that is invoked when the registered event is received.
   * @param eventOrEvents webhook events to listen on.
   * @param name function name to store in registry.
   */
  addHook(
    methodRef: () => any,
    eventOrEvents: EmitterWebhookEventName[],
    name: string = v4(),
  ) {
    this.hooks[name] = {
      target: methodRef,
      eventOrEvents,
    };
  }

  initContext(fn: (context: any) => any) {
    return async (context: any) => {
      await fn(context);
    };
  }

  receiveHook(request: Request) {
    const id = request.headers['x-github-delivery'] as string;
    const event = request.headers['x-github-event'];
    const body = request.body;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.probot.receive({ id, name: event, payload: body });
  }
}
