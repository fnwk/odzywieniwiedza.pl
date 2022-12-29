<template>
  <div class="contact">
    <LandingAtomsFooterContactTitle text="Kontakt mailowy" />
    <LandingMoleculesFooterContactSheet />
  </div>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 2%;
  margin-left: auto;

  @media (min-width: 900px) {
    width: 30%;
  }
}
</style>
