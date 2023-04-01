const FOCUSABLE_ELEMENT_SELECTOR = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

export const getFocusableElement = (container: HTMLElement): HTMLElement | undefined => {
  const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTOR);

  return Array.from(focusableElements).find((element) => !element.hasAttribute('disabled')
    && element.getAttribute('tabindex') !== '-1');
};
