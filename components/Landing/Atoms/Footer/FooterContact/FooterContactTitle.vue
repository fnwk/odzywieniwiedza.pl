<script setup>
const props = defineProps(["text"]);

const isMainHeader = ref(false);

if (props.text.toLowerCase() === "kontakt mailowy") {
  isMainHeader.value = !isMainHeader.value;
}
</script>
<template>
  <p :class="{ 'main-header': isMainHeader }">{{ text }}</p>
</template>
<style lang="scss" scoped>
p {
  font-size: 20px;
  letter-spacing: 1px;
}
.main-header {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
