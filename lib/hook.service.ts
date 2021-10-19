import { Inject, Injectable } from '@nestjs/common';
import { HookConfig } from './interfaces';
import { getPrivateKey } from '@probot/get-private-key';
import { Probot } from 'probot';
import SmeeClient from 'smee-client';
import { Octokit } from '@octokit/rest';
import { createAppAuth } from '@octokit/auth-app';

@Injectable()
export class HookService {
  private readonly _config: HookConfig;

  private readonly _probot: Probot;

  private readonly _octokit: Octokit;

  private _smee: any;

  constructor(@Inject('HOOK_CONFIG') config: HookConfig) {
    this._config = {
      ...config,
      privateKey: getPrivateKey({
        env: { PRIVATE_KEY: config.privateKey },
      }) as string,
    };

    this._probot = new Probot({
      appId: this._config.appId,
      privateKey: this._config.privateKey,
      secret: this._config.webhookSecret,
      baseUrl: this._config.baseUrl,
    });

    this._octokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        appId: this._config.appId,
        privateKey: this._config.privateKey,
        clientId: this._config.clientId,
        clientSecret: this._config.clientSecret,
      },
    });
  }

  startProxy() {
    this._smee = new SmeeClient({
      source: this._config.webhookProxy as string,
      target: this._config.webhookPath as string,
      logger: console,
    });

    this._smee.start();
  }

  config(key: string) {
    // @ts-ignore
    return this._config[key];
  }

  get probot() {
    return this._probot;
  }

  get octokit() {
    return this._octokit;
  }
}
