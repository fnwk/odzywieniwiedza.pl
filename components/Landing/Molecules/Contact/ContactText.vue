<template>
  <div class="contact">
    <LandingMoleculesContactTittle />
    <LandingAtomsContactDescription />
  </div>
</template>
<style scoped lang="scss">
div.contact {
  width: 100vw;
  padding: 0 7%;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 900px) {
    width: 50vw;
    text-align: left;
  }
}
</style>
