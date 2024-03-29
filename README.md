# v3-scroll-lock

**A scroll lock tool for Vue 3.** Works fine on all devices (and browsers). Uses [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) under the hood. Designed by analogy with [v-scroll-lock](https://github.com/phegman/v-scroll-lock), but intended for Vue 3.

## Demo
You're welcome to see how it works by clicking on the following link — https://bcastlel.github.io/v3-scroll-lock/

## Installation & Setup
#### NPM
```bash
npm install v3-scroll-lock
```

#### Yarn
```bash
yarn add v3-scroll-lock
```

After installation, you have to use the plugin you've just installed in `main.js` (or `main.ts`).

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import V3ScrollLock from 'v3-scroll-lock';

createApp(App).use(V3ScrollLock, {})
  .mount('#app');
```

You can also pass [body-scroll-lock options](https://github.com/willmcpo/body-scroll-lock#options) on your own, they will be applied by certain members of the tool.

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import V3ScrollLock from 'v3-scroll-lock';

createApp(App).use(V3ScrollLock, { reserveScrollBarGap: true })
  .mount('#app');
```

## Usage

Now you are able to lock the scroll using the directive and, if you want, the functions.

### The `v-scroll-lock` directive

When the value of the directive is set to `true`, the scroll will be locked on all elements except the element the directive is bound to.

#### Vue 3 Options API
```javascript
<template>
  <div v-if="isOpen" class="modal">
    <button @click="close">
      X
    </button>
    
    <div v-scroll-lock="isOpen" class="modal__content">
      <p class="paragraph">
        Sunt dolore magnam, distinctio numquam tenetur doloremque unde animi iure deleniti vero. Architecto omnis, impedit nesciunt est, ipsa nulla et possimus tempore aut neque voluptatem? Rerum laboriosam tempore eum vitae labore repellendus architecto nobis odio.
      </p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
```

#### Vue 3 Composition API & TypeScript
```javascript
<template>
  <div v-if="isOpen" class="modal">
    <button @click="close">
      X
    </button>
    
    <div v-scroll-lock="isOpen" class="modal__content">
      <p class="paragraph">
        Sunt dolore magnam, distinctio numquam tenetur doloremque unde animi iure deleniti vero. Architecto omnis, impedit nesciunt est, ipsa nulla et possimus tempore aut neque voluptatem? Rerum laboriosam tempore eum vitae labore repellendus architecto nobis odio.
      </p>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);

const open = (): void => {
  isOpen.value = true;
};

const close = (): void => {
  isOpen.value = false;
};

defineExpose({ open, close });
</script>
```

### The functions

This tool exposes 3 functions that you can use declaratively in your own way.

1. `lockScroll: (element: Element, bodyScrollOptions?: BodyScrollOptions) => void`<br>
By default, the options you passed during setup are applied.

2. `unlockScroll: (element: Element) => void`

3. `unlockAllScrolls: () => void`

```javascript
<template>
  <div v-if="isOpen" class="modal">
    <button @click="close">
      X
    </button>
    
    <div ref="content" class="modal__content">
      <p class="paragraph">
        Sunt dolore magnam, distinctio numquam tenetur doloremque unde animi iure deleniti vero. Architecto omnis, impedit nesciunt est, ipsa nulla et possimus tempore aut neque voluptatem? Rerum laboriosam tempore eum vitae labore repellendus architecto nobis odio.
      </p>
    </div>
  </div>
</template>
 
<script>
import { lockScroll, unlockScroll } from 'v3-scroll-lock';

export default {
  name: 'ModalComponent',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;

      this.$nextTick(() => {
        lockScroll(this.$refs.content);
      });
    },
    close() {
      this.isOpen = false;
      
      unlockScroll(this.$refs.content);
    },
  },
};
</script>
```
