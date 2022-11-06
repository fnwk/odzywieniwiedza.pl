<script style></script>

<template>
  <section>
    <MoleculesWelcomeImagesL />
    <AtomsWelcomeSlogan />
    <MoleculesWelcomeImagesR />
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: {
    block: 150px;
    inline: 10%;
  }

  div {
    display: none;

    @media (min-width: 900px) {
      display: block;
    }
  }
}
</style>
