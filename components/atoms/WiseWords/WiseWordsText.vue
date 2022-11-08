<template>
  <div>
    <h1>Lowdau ad awidsd sddaiuw ihoid <span>sddajwon</span></h1>
    <!-- <img src="/images/wiseWords/underline.svg" /> -->
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;

  @media (min-width: 900px) {
    margin: 30px 0 0 -40px;
    width: auto;
  }
}

span {
  position: relative;
  &::after {
    // content: "";
    // background-image: url("/images/wiseWords/underline.svg");
    // width: 200px;
    // height: 15px;
    content: '';
    background: url('/images/wiseWords/mobileHedgehog.svg') no-repeat;
    width: 155px;
    height: 100px;
    left: 0px;
    bottom: -100px;
    position: absolute;

    @media (min-width: 900px) {
      height: 11px;
      background: url('/images/wiseWords/underline.svg') no-repeat;
      left: 5px;
      bottom: -10px;
    }
  }
}
</style>
