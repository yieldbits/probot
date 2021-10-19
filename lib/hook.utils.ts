import { v4 } from 'uuid';
import { HookConfig } from './interfaces';
import { omit } from 'lodash';

export const generateString = () => v4();

const defaultOptions: HookConfig = {
  appId: process.env.APP_ID as string,
  privateKey: process.env.PRIVATE_KEY as string,
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
};

export function mergeDefaults(
  options: HookConfig,
  defaults: HookConfig = defaultOptions,
): HookConfig {
  return {
    ...omit(defaults, 'plugins'),
    ...options,
  };
}
