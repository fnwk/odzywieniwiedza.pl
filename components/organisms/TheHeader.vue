<script setup>
const emit = defineEmits(['toggleNavbar']);

const isMobileNav = ref(false);

const toggleMobileNavbar = () => {
  isMobileNav.value = !isMobileNav.value;
};

window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });
  
</script>
<template>
  <header>
    <MoleculesHeaderDropdown
      v-if="isMobileNav"
      :links="['O Nas', 'Aktualności', 'kupa', 'test']"
    />
    <MoleculesHeaderNav :links="['O Nas', 'Aktualności']" />
    <AtomsHeaderLogo />
    <MoleculesHeaderNav :links="['kupa', 'test']" />
    <AtomsHeaderBars @toggle-navbar="toggleMobileNavbar" :navActive="isMobileNav"/>
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
  padding: {
    block: 30px;
    inline: 10%;
  }
}
</style>