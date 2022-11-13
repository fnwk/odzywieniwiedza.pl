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
  height: 300px;
  margin: 0 5vw;
  border: variables.$black 3px solid;
  border-radius: 10px;
  z-index: 5;

  @media (min-width: 900px) {
    width: 40vw;
    margin: 0 5vw;
    height: 23vw;
  }

  form{
    width: 100%;
    height: 100%;
  }
}
</style>
