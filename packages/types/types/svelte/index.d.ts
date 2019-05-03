// Type definitions for svelte 3.1
// Project: https://github.com/sveltejs/svelte#README
// Definitions by: Jungle <https://github.com/pyoner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "*.svelte" {
  interface Component {
    new (options: any): any;
  }
  const component: Component;
  export default component;
}

declare module "svelte" {
  export function afterUpdate(fn: () => void): void;

  export function beforeUpdate(fn: () => void): void;

  export function onDestroy(fn: () => void): void;

  export function onMount(fn: () => void): void;
  export function onMount(fn: () => () => void): void;

  export function setContext<K, C>(key: K, context: C): void;
  export function getContext<K, C>(key: K): C;

  export function tick(): Promise<void>;

  export function createEventDispatcher<D>(): (type: string, detail: D) => void;
}

/// <reference path="./store.d.ts" />
/// <reference path="./motion.d.ts" />
/// <reference path="./transition.d.ts" />
/// <reference path="./animate.d.ts" />
/// <reference path="./easing.d.ts" />
