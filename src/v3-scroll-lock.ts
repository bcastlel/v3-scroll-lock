import { Directive, Plugin } from 'vue';
import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';

let bodyScrollOptions: BodyScrollOptions = {};

const v3ScrollLock = <Directive<Element, boolean>>{
  mounted(element, { value }) {
    if (value) {
      disableBodyScroll(element, bodyScrollOptions);
    }
  },

  updated(element, { value }) {
    if (value) {
      disableBodyScroll(element, bodyScrollOptions);
    } else {
      enableBodyScroll(element);
    }
  },

  beforeUnmount(element) {
    enableBodyScroll(element);
  },
};

export default <Plugin<BodyScrollOptions>>{
  install(app, options) {
    bodyScrollOptions = options;
    app.directive('scroll-lock', v3ScrollLock);
  },
};
