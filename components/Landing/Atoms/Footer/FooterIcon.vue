<script setup>
defineProps({ iconName: String });
</script>

<template>
  <img :src="'/images/footer/' + iconName + '.svg'" />
</template>

<style lang="scss" scoped>
img {
  width: 6vmin;
  margin-block: 20px;
  filter: drop-shadow(5px 5px #ffffff);
}
</style>
