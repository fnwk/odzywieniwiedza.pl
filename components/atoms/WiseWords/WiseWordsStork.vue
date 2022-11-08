<template>
  <div>
    <img src="/images/wiseWords/stork.svg" />
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 200px;

  img {
    display: none;

    @media (min-width: 900px) {
      display: block;
      width: 100%;
    }
  }
}
</style>
