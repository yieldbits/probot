import { loadConfigUtil } from './load-config.util';
import { Probot } from 'probot';

export const createProbot = () => {
  const config = loadConfigUtil();
  return new Probot({
    appId: config.appId,
    privateKey: config.privateKey,
    secret: config.webhookSecret,
    baseUrl: config.ghUrl,
  });
};
