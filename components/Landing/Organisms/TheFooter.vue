<template>
  <footer>
    <LandingAtomsFooterMonke />
    <div class="container">
      <LandingMoleculesFooterSocialMedia />
      <!-- <LandingMoleculesFooter... /> -->
      <LandingMoleculesFooterContact />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;

  .container {
    display: flex;
    flex-direction: row;
    width: 101%;
    margin-top: 300px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 5px solid variables.$black;
    background: variables.$yellow;
    transform: translateX(-0.5%);
    overflow: hidden;
  }
}
</style>
