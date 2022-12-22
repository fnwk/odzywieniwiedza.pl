<script setup>
const emit = defineEmits(["toggleNavbar"]);

const links = [
  { title: "O Projekcie", link: "#o_projekcie" },
  { title: "O nas", link: "#o_nas" },
  { title: "Partnerzy", link: "#partnerzy" },
  { title: "Aktualności", link: "Aktualnosci" },
];

const scrollY = ref(0);
const isMobileNav = ref(false);

if (process.client) {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
}

const navState = computed(() => {
  if (scrollY.value === 0) {
    return "default";
  } else {
    return "scrolled";
  }
});

const toggleMobileNavbar = () => {
  isMobileNav.value = !isMobileNav.value;
};
</script>
<template>
  <header :class="navState">
    <LandingMoleculesHeaderDropdown
      :isVisibleNav="isMobileNav"
      :links="links"
    />

    <LandingMoleculesHeaderNav :links="links.slice(0, 2)" />
    <LandingAtomsHeaderLogo />
    <LandingMoleculesHeaderNav :links="links.slice(2, 4)" />

    <LandingAtomsHeaderBars
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
