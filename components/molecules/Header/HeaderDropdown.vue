<script setup>
const props = defineProps(['links']);
</script>
<template>
  <ul>
    <AtomsHeaderLink v-for="link in links" :key="link" :link="link" />
  </ul>
</template>
<style lang="scss" scoped>
ul {
  background: white;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  list-style: none;
  padding: {
    left: 75px;
    top: 105px;
  };

  @media (min-width: 900px) {
    display: none;
  }
}
</style>
