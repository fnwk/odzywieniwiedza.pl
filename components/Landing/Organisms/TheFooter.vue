<template>
  <footer>
    <div></div>
    <LandingAtomsFooterMonke />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;

  div {
    display: flex;
    width: 101%;
    height: 200px;
    margin-top: 300px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 5px solid variables.$black;
    background: variables.$yellow;
    transform: translateX(-0.5%);
  }
}
</style>
