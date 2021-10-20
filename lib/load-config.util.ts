import { HookConfig } from './interfaces/hook.config';
import { getPrivateKey } from '@probot/get-private-key';
import * as dotenv from 'dotenv';
dotenv.config();

export const loadConfigUtil = (): HookConfig => {
  return {
    appId: process.env.GH_APP_ID,
    privateKey: getPrivateKey({
      env: { PRIVATE_KEY: process.env.GH_PRIVATE_KEY },
    }) as string,
    webhookSecret: process.env.GH_WEBHOOK_SECRET,
    ghUrl: process.env.GH_URL,
    ghWebhookProxy: process.env.GH_WEBHOOK_PROXY_URL as string,
    ghWebhookPath: process.env.GH_WEBHOOK_PATH as string,
  };
};
