import { ModuleMetadata, Type } from '@nestjs/common';

export interface HookConfig {
  /**
   * @property
   * Github App ID
   */
  appId: string;

  /**
   * @property
   * Github Private key generated for the app
   */
  privateKey: string;

  /**
   * @property
   * Webhook Secret
   */
  webhookSecret?: string;

  /**
   * @property
   * @default: github.com
   *
   * Github base url.
   */
  baseUrl?: string;

  /**
   * @property
   *
   * Probot proxy url
   */
  webhookProxy?: string;

  /**
   * @property
   *
   * Proxy path to forward events to
   */
  webhookPath?: string;

  /**
   * @property
   *
   * Github client ID
   */
  clientId: string;

  /**
   * @property
   *
   * Github client secret
   */
  clientSecret: string;
}

export interface HookConfigFactory {
  createConfig(): Promise<HookConfig> | HookConfig;
}

export interface HookModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<HookConfigFactory>;
  useClass?: Type<HookConfigFactory>;
  useFactory?: (...args: any[]) => Promise<HookConfig> | HookConfig;
  inject?: any[];
}
