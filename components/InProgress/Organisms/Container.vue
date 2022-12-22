<template>
  <img src="/images/navbar/Logo.png" class="logo" />
  <InProgressMoleculesText />
  <LandingMoleculesHeroImages />
</template>
<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  height: 75px;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 5vmin;
    width: 60%;
    margin: auto;
  }

  h3 {
    font-size: 4vmin;
    font-weight: variables.$light;
  }
}
</style>
