import { Octokit } from '@octokit/rest';
import { loadConfigUtil } from './load-config.util';
import { createAppAuth } from '@octokit/auth-app';

export const createOctokit = () => {
  const config = loadConfigUtil();
  return new Octokit({
    authStrategy: createAppAuth,
    baseUrl: config.ghUrl,
    auth: {
      appId: config.appId,
      privateKey: config.privateKey,
      clientId: config.ghClientId,
      clientSecret: config.ghClientSecret,
    },
  });
};
