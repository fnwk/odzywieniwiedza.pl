<script setup>
const emit = defineEmits(['toggleNavbar']);

const scrollY = ref(0);
const isMobileNav = ref(false);

const navState = computed(() => {
  if (scrollY.value === 0) {
    return 'default';
  } else {
    return 'scrolled';
  }
});

console.log(scrollY);

const toggleMobileNavbar = () => {
  isMobileNav.value = !isMobileNav.value;
};

if (process.client) {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });
}
</script>
<template>
  <header :class="navState">
    <MoleculesHeaderDropdown
      v-if="isMobileNav"
      :links="['O Projekcie', 'O nas', 'Partnerzy', 'Aktualności']"
    />
    <MoleculesHeaderNav :links="['O Projekcie', 'O nas']" />
    <AtomsHeaderLogo />
    <MoleculesHeaderNav :links="['Partnerzy', 'Aktualności']" />
    <AtomsHeaderBars
      @toggle-navbar="toggleMobileNavbar"
      :navActive="isMobileNav"
    />
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  background: white;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  padding-inline: 10%;
  transition: all 0.2s ease-in-out;

  &.default {
    padding-block: 30px;
    background: white;
  }

  &.scrolled {
    padding-block: 10px;
    // box-shadow: 0px 6px 47px -30px rgba(66, 68, 90, 1);

    @media (min-width: 900px) {
      padding-block: 5px;

      img {
        transition: all 0.6s ease-in-out;
        width: 250px;
      }
    }
  }
}
</style>
