export const NO_HOOK_FOUND = (hookType: string, name?: string) =>
  name
    ? `No ${hookType} was found with the given name (${name}). Check that you created one with a decorator or with the create API.`
    : `No ${hookType} was found. Check your configuration.`;

export const DUPLICATE_HOOK = (hookType: string, name: string) =>
  `${hookType} with the given name (${name}) already exists. Ignored.`;
