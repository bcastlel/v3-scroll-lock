<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      ref="modal"
      v-bind="{ ...$attrs, ...scopeAttrs }"
      :class="CLASS_NAME"
      tabindex="0"
      @keydown.esc="close"
    >
      <transition
        name="fade"
        appear
        @after-leave="emitClose"
      >
        <div
          v-show="isInternallyVisible"
          class="modal__overlay"
          @click="close"
        />
      </transition>

      <transition :name="transition" appear>
        <div v-show="isInternallyVisible" class="modal__base">
          <div v-scroll-lock="modelValue" class="modal__content">
            <slot :on-close="close" />
          </div>

          <button
            v-if="!hideCloseButton"
            class="modal__close"
            type="button"
            @click="close"
          >
            <close-icon class="modal__close-icon" />
          </button>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import {
  getCurrentInstance,
  ref,
  watch,
  nextTick,
  defineComponent,
} from 'vue';
import CloseIcon from '../assets/close.svg?component';
import { getFocusableElement } from '../utils/get-focusable-element';

const CLASS_NAME = 'modal';

const instance = getCurrentInstance();

const scopeId = instance?.vnode.scopeId;
const scopeAttrs = scopeId ? { [scopeId]: '' } : {};

const props = withDefaults(defineProps<{
  modelValue: boolean;
  hideCloseButton?: boolean;
  transition?: string;
}>(), {
  hideCloseButton: false,
  transition: 'fade',
});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{ (evt: 'update:modelValue', newModelValue: boolean): void }>();

const modal = ref<HTMLElement | null>(null);
const isInternallyVisible = ref(false);

const close = (): void => {
  isInternallyVisible.value = false;
};

const focusIn = (modalElement: HTMLElement): void => {
  const focusableElement = getFocusableElement(modalElement);

  if (focusableElement) {
    focusableElement.focus();
  } else {
    modalElement.focus();
  }
};

watch(modal, () => {
  if (!modal.value) {
    return;
  }

  isInternallyVisible.value = props.modelValue;
  nextTick(() => {
    focusIn(modal.value!);
  });
});

const emitClose = (): void => {
  const modalElements = document.getElementsByClassName(CLASS_NAME);
  const currentModalElement = modalElements[modalElements.length - 2] as HTMLElement | undefined;

  emit('update:modelValue', false);

  if (currentModalElement) {
    nextTick(() => {
      focusIn(currentModalElement);
    });
  }
};

defineExpose({ close });
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(black, 0.3);
  }

  &__base {
    border-radius: 4px;
    padding: 36px 0 32px 32px;
    width: 90%;
    max-width: 576px;
    max-height: 90%;
    background-color: white;
    display: flex;
    position: relative;
  }

  &__content {
    padding-right: 32px;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 9px;
    right: 9px;
    width: 20px;
    height: 20px;

    $self: &;

    &-icon {
      fill: $mono;
      transition: fill 0.1s;
    }

    &:hover,
    &:focus {
      #{$self}-icon {
        fill: $mono-darker;
      }
    }
  }
}
</style>
