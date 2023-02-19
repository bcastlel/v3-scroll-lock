# v3-scroll-lock

**A scroll lock tool for Vue 3.** Works fine on all devices (and browsers). Uses [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) under the hood. Designed by analogy with [v-scroll-lock](https://github.com/phegman/v-scroll-lock), but intended for Vue 3. I've decided to make it separate from [v-scroll-lock](https://github.com/phegman/v-scroll-lock) because I'm going to improve this tool in the near future.

## Installation
```bash
npm install v3-scroll-lock
```

## Usage
Firstly, you have to use the plugin you've just installed in `main.js (or main.ts).`

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import V3ScrollLock from 'v3-scroll-lock';

createApp(App).use(V3ScrollLock, {})
  .mount('#app');
```

You can also pass [body-scroll-lock options](https://github.com/willmcpo/body-scroll-lock#options) on your own.

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import V3ScrollLock from 'v3-scroll-lock';

createApp(App).use(V3ScrollLock, { reserveScrollBarGap: true })
  .mount('#app');
```

Then you can use the `v-scroll-lock` directive in any component you want.

##### Vue 3 Options API
```javascript
<template>
  <div v-if="isOpened" class="modal">
    <button @click="close">
      X
    </button>
    
    <div v-scroll-lock="isOpened" class="modal__content">
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
      isOpened: false,
    };
  },
  methods: {
    open() {
      this.isOpened = true;
    },
    close() {
      this.isOpened = false;
    },
  },
};
</script>
```

##### Vue 3 Composition API + TypeScript
```javascript
<template>
  <div v-if="isOpened" class="modal">
    <button @click="close">
      X
    </button>
    
    <div v-scroll-lock="isOpened" class="modal__content">
      <p class="paragraph">
        Sunt dolore magnam, distinctio numquam tenetur doloremque unde animi iure deleniti vero. Architecto omnis, impedit nesciunt est, ipsa nulla et possimus tempore aut neque voluptatem? Rerum laboriosam tempore eum vitae labore repellendus architecto nobis odio.
      </p>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue';

const isOpened = ref(false);

const open = (): void => {
  isOpened.value = true;
};

const close = (): void => {
  isOpened.value = false;
};
</script>
```
