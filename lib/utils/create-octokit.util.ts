import { Octokit } from '@octokit/rest';
import { loadConfigUtil } from './load-config.util';
import { createAppAuth } from '@octokit/auth-app';

export const createOctokit = (authOptions: any) => {
  const config = loadConfigUtil();
  return new Octokit({
    authStrategy: createAppAuth,
    baseUrl: config.ghUrl,
    auth: {
      ...authOptions,
      appId: config.appId,
      privateKey: config.privateKey,
      clientId: config.ghClientId,
      clientSecret: config.ghClientSecret,
    },
  });
};
