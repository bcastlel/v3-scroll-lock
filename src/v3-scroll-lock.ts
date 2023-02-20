import { Directive, Plugin } from 'vue';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
  BodyScrollOptions,
} from 'body-scroll-lock';

let pluginBodyScrollOptions: BodyScrollOptions = {};

export const lockScroll = (
  element: Element,
  bodyScrollOptions = pluginBodyScrollOptions,
): ReturnType<typeof disableBodyScroll> => disableBodyScroll(element, bodyScrollOptions);

export const unlockScroll = (element: Element): ReturnType<typeof enableBodyScroll> => enableBodyScroll(element);

export const unlockAllScrolls = (): ReturnType<typeof clearAllBodyScrollLocks> => clearAllBodyScrollLocks();

const V3ScrollLockDirective = <Directive<Element, boolean>>{
  mounted(element, { value }) {
    if (value) {
      lockScroll(element);
    }
  },

  updated(element, { value }) {
    if (value) {
      lockScroll(element);
    } else {
      unlockScroll(element);
    }
  },

  beforeUnmount(element) {
    unlockScroll(element);
  },
};

export default <Plugin<BodyScrollOptions>>{
  install(app, options) {
    pluginBodyScrollOptions = options;
    app.directive('scroll-lock', V3ScrollLockDirective);
  },
};
