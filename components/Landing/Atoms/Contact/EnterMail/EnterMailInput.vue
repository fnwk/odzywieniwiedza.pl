<script setup>
const author = inject("author");
</script>

<template>
  <input type="email" required v-model="author" />
</template>

<style lang="scss" scoped>
input {
  height: 30px;
  width: 80%;
  color: #353535;
  border: 3px solid variables.$black;
  border-radius: 6px;
  margin-inline: 10%;
  margin-bottom: 30px;
}
</style>
