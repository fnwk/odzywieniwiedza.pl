<template>
  <div>
    <img src="/images/aboutProject/Stain.svg" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -60%);
    width: 150px;
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    width: 20%;

    img {
      position: static;
      transform: translate(0, 0);
      width: 100%;
    }
  }
}
</style>
