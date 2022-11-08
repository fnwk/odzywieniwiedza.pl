<template>
  <div>
    <AtomsAboutProjectHeader />
    <AtomsAboutProjectDescription />
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    width: 50%;
    margin: 0;
    padding-bottom: 250px;
  }
}
</style>
