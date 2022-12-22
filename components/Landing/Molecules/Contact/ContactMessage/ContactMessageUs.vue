<script setup>
const title = ref("");
const titleHandler = (value) => (title.value = value);
provide("changeTitle", titleHandler);

const message = ref("");
const messageHandler = (value) => (message.value = value);
provide("changeMessage", messageHandler);

const author = ref("");
const authorHandler = (value) => (author.value = value);
provide("changeAuthor", authorHandler);

const isClicked = ref(false);
const clicked = () => (isClicked.value = true);
provide("submit", clicked);
</script>
<template>
  <div class="message">
    <LandingAtomsContactMessageHeader />
    <form>
      <LandingMoleculesContactMessageTittle @clicked="clicked" />
      <LandingAtomsContactMessageTextarea />
      <LandingMoleculesContactEnterMailBox v-if="isClicked" />
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

  form {
    width: 100%;
    height: 100%;
  }
}
</style>
