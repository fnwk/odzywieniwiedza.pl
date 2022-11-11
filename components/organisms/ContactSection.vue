<template>
  <section>
    <MoleculesContactText />
    <MoleculesContactMessageUs />
  </section>
</template>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media (min-width: 900px) {
    flex-direction: row;
    margin-top: 0;
  }
}
</style>
