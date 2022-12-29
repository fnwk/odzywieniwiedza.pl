<script setup>
defineProps({ iconName: String, link: String });
</script>

<template>
  <NuxtLink :to="link">
    <img :src="'/images/footer/' + iconName + '.svg'" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
img {
  width: 6vmin;
  margin-block: 20px;
  filter: drop-shadow(5px 5px #ffffff);
}
</style>
