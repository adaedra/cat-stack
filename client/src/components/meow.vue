<script>
export default {
  setup() {
    async function fetchMeow() {
      const startAt = new Date();
      const reply = await fetch("/api/");
      const text = await reply.text();
      const endAt = new Date();

      console.log(`Server sent "${text}" in ${(endAt - startAt) / 1000}s`);
    }

    return { fetchMeow };
  },
};
</script>

<template>
  <button :style="{ fontSize: '10em' }" @click="fetchMeow">😺</button>
</template>
