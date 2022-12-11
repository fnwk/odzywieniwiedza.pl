<template>
  <h1>Nasza działalność <span>zmienia</span> świat na lepsze!</h1>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 2.5;
  margin-bottom: 25px;

  span {
    position: relative;
    margin: {
      left: 30px;
      right: 40px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 55%;
      transform: translate(-50%, -50%);
      display: block;
      width: 150%;
      height: 250%;
      background: {
        image: url("/images/aboutProject/Mark.svg");
        size: 100% 100%;
      }
    }
  }

  @media (min-width: 900px) {
    font-size: 4.3vmin;
    margin-bottom: 50px;
    line-height: 2;
  }
}
</style>
