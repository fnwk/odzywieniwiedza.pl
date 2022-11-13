<script setup>
const props = defineProps(["navActive"]);
</script>

<template>
  <div class="hamburger" :class="{ 'hamburger-active': navActive }" @click="$emit('toggleNavbar')">
    <img src="/images/navbar/Burger.svg" />
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  position: absolute;
  right: 20px;
  width: 40px;
  height: 40px;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 900px) {
    display: none;
  }
}
.hamburger-active {
  transform: skew(-10deg);
}
</style>
