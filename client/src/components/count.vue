<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }

    return { state, increment };
  },
};
</script>

<style module>
.button {
  @apply border-red-900 border-4;
}
</style>

<template>
  <button :class="$style.button" @click="increment">
    You clicked me {{ state.count }} times.
  </button>
</template>
