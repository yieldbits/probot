import { EmitterWebhookEventName } from '@octokit/webhooks/dist-types/types';

export interface HookEventMetadataInterface {
  eventOrEvents: EmitterWebhookEventName[];
}
