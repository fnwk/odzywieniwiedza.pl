<template>
  <section>
    <LandingAtomsHeroSlogan />
    <LandingMoleculesHeroImages />
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  margin: {
    top: 150px;
    bottom: 100px;
  }
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    margin-top: 0;
    height: 100vh;
    padding: {
      block: 150px;
      inline: 10%;
    }
  }

  div {
    display: none;

    @media (min-width: 900px) {
      display: block;
    }
  }
}
</style>
