import { Injectable } from '@nestjs/common';
import { DUPLICATE_HOOK, NO_HOOK_FOUND } from './hook.messages';

@Injectable()
export class HookRegistry {
  private readonly hooks = new Map<string, any>();

  getHook(name: string) {
    const ref = this.hooks.get(name);

    if (typeof ref === 'undefined') {
      throw new Error(NO_HOOK_FOUND('Hook', name));
    }

    return ref;
  }

  doesExists(name: string) {
    return this.hooks.has(name);
  }

  addHook<T = any>(name: string, hookId: T) {
    const ref = this.hooks.get(name);

    if (ref) {
      throw new Error(DUPLICATE_HOOK('Hook', name));
    }

    this.hooks.set(name, hookId);
  }

  removeHook(name: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const hook = this.getHook(name);
    // TODO remove hook from probot listener
    this.hooks.delete(name);
  }
}
