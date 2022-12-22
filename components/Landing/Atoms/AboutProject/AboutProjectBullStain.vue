<template>
  <div>
    <img src="/images/aboutProject/BullMark.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 30%;
  height: 100%;
  position: relative;
  display: none;

  img {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 135%;
    height: 135%;
  }

  @media (min-width: 900px) {
    display: block;
  }
}
</style>
