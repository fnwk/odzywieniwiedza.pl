<script setup>
const error = ref("");
provide("error", error);

const title = ref("");
provide("title", title);

const message = ref("");
provide("message", message);

const author = ref("");
provide("author", author);

const isClicked = ref(false);
const clickHandler = () => {
  checkValidity();
  isClicked.value = !isClicked.value;
};
provide("submit", clickHandler);

const checkValidity = () => {
  if (title.value.trim().length <= 0) {
    error.value = "Wpisz temat wiadomości";
    return false;
  } else if (message.value.trim().length <= 0) {
    error.value = "Wpisz treść wiadomości";
    return false;
  }
};

watch(error, (value) => {
  console.log(value);
  if (value === "Wpisz swój adres e-mail") {
    setTimeout(() => {
      error.value = "";
    }, 1000);
  }
});

const sendMail = async () => {
  if (author.value.trim().length <= 0) {
    error.value = "Wpisz swój adres e-mail";
    return;
  }

  if (checkValidity) {
    await useFetch("/api/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        message: message.value,
        author: author.value,
      }),
    });

    title.value = "";
    message.value = "";
    author.value = "";

    isClicked.value = false;
  }
};

provide("sendMail", sendMail);
</script>
<template>
  <div class="message">
    <LandingAtomsContactMessageHeader />
    <LazyLandingAtomsUIError
      v-if="error.length > 0 && isClicked"
      :error="error"
    />
    <form @submit.prevent>
      <LandingMoleculesContactMessageTittle @clicked="clickHandler" />
      <LandingAtomsContactMessageTextarea />
      <LandingMoleculesContactEnterMailBox
        v-if="error.length === 0 && isClicked"
      />
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
