<script setup>
// const isMobileNav = ref(false);
// const toggleMobile = () => {
//   isMobileNav.value = !isMobileNav.value;
// };
</script>
<template>
  <div class="hamburger" @click="$emit('toggleNavbar')">
    <img src="/images/navbar/Burger.svg" />
  </div>
</template>
<style lang="scss" scoped>
.hamburger {
  position: absolute;
  top: 40px;
  right: 20px;
  width: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 900px) {
    display: none;
  }
}
</style>
