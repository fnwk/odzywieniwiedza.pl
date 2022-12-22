<template>
  <section>
    <LandingMoleculesWiseWordsMessage />
    <LandingAtomsWiseWordsIllustration />
  </section>
</template>
<style lang="scss" scoped>
section {
  width: 100%;
  position: relative;
  margin-top: 100px;
  margin-bottom: 150px;
  padding-inline: 10px;

  div {
    @media (min-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
