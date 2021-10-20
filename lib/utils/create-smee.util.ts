import { loadConfigUtil } from './load-config.util';
import SmeeClient from 'smee-client';

export const createSmee = () => {
  const config = loadConfigUtil();
  return new SmeeClient({
    source: config.ghWebhookProxy as string,
    target: config.ghWebhookPath as string,
    logger: console,
  });
};
