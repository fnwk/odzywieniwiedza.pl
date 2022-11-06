<script setup>
const { link } = defineProps({
  link: {
    type: String,
  },
});
</script>

<template>
  <li>{{ link }}</li>
</template>

<style scoped lang="scss">
li {
  font-size: 10vmin;
  padding-block: 20px;

  @media (min-width: 900px) {
    font-size: 2.7vmin;
    padding-block: 0;
  }
}
</style>
