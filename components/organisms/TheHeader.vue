<script setup>
const emit = defineEmits(['toggleNavbar']);

const isMobileNav = ref(false);

const toggleMobileNavbar = () => {
  isMobileNav.value = !isMobileNav.value;
};
</script>
<template>
  <header>
    <MoleculesHeaderNav :links="['O Nas', 'Aktualności']" />
    <AtomsHeaderLogo />
    <MoleculesHeaderNav :links="['kupa', 'test']" />
    <AtomsHeaderBars @toggle-navbar="toggleMobileNavbar" />
    <MoleculesHeaderDropdown
      v-if="isMobileNav"
      :links="['O Nas', 'Aktualności', 'kupa', 'test']"
    />
  </header>
</template>

<style scoped lang="scss">
header {
  // box-sizing: border-box;
  position: fixed;
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
