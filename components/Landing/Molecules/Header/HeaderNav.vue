<script setup>
const props = defineProps(["links"]);
</script>

<template>
  <ul>
    <LandingAtomsHeaderLink
      v-for="link in links"
      :key="link"
      :title="link.title"
      :link="link.link"
    />
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: none;
  align-items: center;
  list-style: none;

  @media screen and (min-width: 900px) {
    width: 25%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
