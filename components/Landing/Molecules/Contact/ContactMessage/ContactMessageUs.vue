<script setup>
const error = ref("");
provide("error", error);

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
const clicked = () => (isClicked.value = !isClicked.value);
provide("submit", clicked);

const isValid = () => {
  if (title.value.trim().length <= 0) {
    error.value = "Wpisz temat wiadomości";
    return false;
  } else if (message.value.trim().length <= 0) {
    error.value = "Wpisz treść wiadomości";
    return false;
  }
};

watch(isClicked, (value) => {
  if (value) {
    isValid();
  }
});

const sendMail = async () => {
  if (author.value.trim().length <= 0) {
    error.value = "Wpisz swój adres e-mail";
    return;
  }

  if (title.value !== "" && message.value !== "" && author.value !== "") {
    console.log("test1");
    await useFetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        message: message.value,
        author: author.value,
      }),
    });

    isClicked.value = false;
  }
};
provide("sendMail", sendMail);
</script>
<template>
  <div class="message">
    <LandingAtomsContactMessageHeader />
    <LazyLandingAtomsUIError v-if="error && isClicked" :error="error" />
    <form>
      <LandingMoleculesContactMessageTittle @clicked="clicked" />
      <LandingAtomsContactMessageTextarea />
      <LandingMoleculesContactEnterMailBox v-if="isClicked && isValid" />
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
