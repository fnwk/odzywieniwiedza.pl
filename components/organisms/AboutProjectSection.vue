<script></script>

<template>
  <section id="o_projekcie">
    <AtomsAboutProjectStain />
    <AtomsAboutProjectBull />
    <MoleculesAboutProjectText />
    <AtomsAboutProjectBullStain />
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;

  @media (min-width: 900px) {
    flex-direction: row;
    margin-top: 0;
  }
}
</style>
