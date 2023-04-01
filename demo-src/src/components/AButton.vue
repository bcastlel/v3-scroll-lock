<template>
  <component
    :is="tag"
    v-bind="{
      type: tag === 'button' ? 'button' : undefined,
      ...$attrs,
    }"
    class="button"
    :class="[
      `button_design_${design}`,
      `button_size_${size}`,
      {
        button_transparent: outlined || plain,
        button_outlined: outlined,
        button_plain: plain,
        button_reversed: reversed,
        'button_has-no-text': !$slots.default,
      },
    ]"
  >
    <span v-if="$slots.icon" class="button__icon-wrapper">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" class="button__text">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

const DESIGNS = ['primary', 'secondary', 'tertiary'] as const;
type Design = typeof DESIGNS[number];
const SIZES = ['small', 'medium', 'large'] as const;
type Size = typeof SIZES[number];

withDefaults(defineProps<{
  design?: Design;
  size?: Size;
  tag?: string;
  outlined?: boolean;
  plain?: boolean;
  reversed?: boolean;
}>(), {
  design: 'primary',
  size: 'medium',
  tag: 'button',
  outlined: false,
  plain: false,
  reversed: false,
});
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
$padding-x: 0.9125em;
$sizes: (
  'small': 30px,
  'medium': 36px,
  'large': 42px,
);
$icon-margin: 0.5em;

.button {
  border-radius: 4px;
  border: 1px solid $secondary;
  padding: 0.425em $padding-x;
  min-width: map-get($sizes, 'medium');
  min-height: map-get($sizes, 'medium');
  color: white;
  background-color: $secondary;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition:
    border-color 0.2s,
    color 0.1s,
    background-color 0.2s;

  $root: &;

  &:hover,
  &:focus-visible {
    border-color: $secondary-darker;
    background-color: $secondary-darker;
  }

  &_size {
    &_small {
      min-width: map-get($sizes, 'small');
      min-height: map-get($sizes, 'small');
      font-size: 14px;
    }

    &_large {
      min-width: map-get($sizes, 'large');
      min-height: map-get($sizes, 'large');
      font-size: 18px;
    }
  }

  &[disabled] {
    opacity: 0.5;
  }

  &__icon-wrapper {
    margin-right: $icon-margin;
    width: 1em;
    height: 1em;
    flex-shrink: 0;

    svg {
      width: 100%;
      max-height: 100%;
      fill: currentColor;
    }
  }

  &_design {
    &_secondary {
      border-color: $mono;
      background-color: $mono;

      &:hover,
      &:focus-visible {
        border-color: $mono-darker;
        background-color: $mono-darker;
      }
    }

    &_tertiary {
      border-color: $mono-lightest;
      color: $primary;
      background-color: $mono-lightest;

      &:hover,
      &:focus-visible {
        border-color: darken($mono-lightest, 7.5%);
        background-color: darken($mono-lightest, 7.5%);
      }
    }
  }

  &_transparent {
    color: $secondary;
    background-color: transparent;

    &:hover,
    &:focus-visible {
      color: $secondary-darker;
      background-color: transparent;
    }

    &#{$root}_design {
      &_secondary {
        color: $mono;

        &:hover,
        &:focus-visible {
          color: $mono-darker;
        }
      }

      &_tertiary {
        color: $primary;

        &:hover,
        &:focus-visible {
          color: $primary-darker;
        }
      }
    }
  }

  &_reversed &__icon-wrapper {
    margin-right: 0;
    margin-left: $icon-margin;
    order: 1;
  }

  &_has-no-text &__icon-wrapper {
    margin: 0 -#{$padding-x};
  }

  &_plain {
    border-radius: 0;
    border: none;
    padding: 0;
  }
}
</style>
