<script setup>
const props = defineProps(["links", "isVisibleNav"]);

watch(
  () => props.isVisibleNav,
  () => {
    isVisibleNavbar.value = props.isVisibleNav;
  }
);
const isVisibleNavbar = ref(props.isVisibleNav);

const hideNavbar = (isClicked) => {
  console.log(isVisibleNavbar.value);
  console.log(isClicked);
  if (isClicked === true) isVisibleNavbar.value = false;
  isClicked = false;
  console.log(isVisibleNavbar.value);
  // isClicked = false;
};
</script>
<template>
  <ul v-if="isVisibleNavbar">
    <LandingAtomsHeaderLink
      v-for="link in links"
      :key="link"
      :link="link.link"
      :title="link.title"
      @hide-navbar="hideNavbar"
    />
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
  }

  @media (min-width: 900px) {
    display: none;
  }
}
</style>
