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
  border: 5px solid red;
}
</style>

<template>
  <button :class="$style.button" @click="increment">
    You clicked me {{ state.count }} times.
  </button>
</template>
