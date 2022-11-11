<template>
  <div class="message">
    <MoleculesContactMessageHeader />
    <form>
      <MoleculesContactMessageTittle />
      <AtomsContactMessageTextarea />
    </form>
  </div>
</template>
<style lang="scss" scoped>
div.message {
  width: 90vw;
  margin: 0 5vw;
  border: variables.$black 3px solid;
  border-radius: 10px;
  height: 28vw;
  z-index: 5;

  @media (min-width: 900px) {
    width: 40vw;
  }
}
</style>
