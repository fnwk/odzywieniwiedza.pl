<script setup></script>

<template>
  <div>
    <img class="illustration mniam" src="/images/hero/illustrations/5.svg" />
    <img class="illustration stripes" src="/images/hero/illustrations/1.svg" />
    <img class="illustration waves" src="/images/hero/illustrations/2.svg" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  width: 20%;
  height: 100%;

  .illustration {
    &.mniam {
      width: 21vmin;
      position: absolute;
      top: 0;
      left: 0;
    }
    &.stripes {
      width: 13vmin;
      position: absolute;
      top: 30%;
      left: 80%;
    }

    &.waves {
      position: absolute;
      width: 10vmin;
      top: 80%;
      left: 50%;
    }
  }
}
</style>
