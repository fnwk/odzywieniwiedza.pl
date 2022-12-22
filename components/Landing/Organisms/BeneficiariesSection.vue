<template>
  <section>
    <LandingMoleculesBeneficiariesBanner />
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100vw;
  height: 35vh;
  margin: {
    top: 150px;
    bottom: 10px;
  }

  @media (min-width: 900px) {
    margin: {
      top: 0px;
      bottom: 30vmax;
    }
  }
}
</style>
