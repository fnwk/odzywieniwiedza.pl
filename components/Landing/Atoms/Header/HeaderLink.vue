<script setup>
const emit = defineEmits(["hide-navbar"]);
const { link } = defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const hideNavbar = () => {
  emit("hide-navbar", true);
};
</script>

<template>
  <li>
    <mark>
      <NuxtLink @click="hideNavbar" :to="link">{{ title }}</NuxtLink>
    </mark>
  </li>
</template>

<style scoped lang="scss">
li {
  font-size: 10vmin;
  padding-block: 20px;

  mark {
    display: inline-block;
    line-height: 0em;
    padding-bottom: 0em;
    background-color: variables.$yellow;
    transition: all 0.1s ease-in-out;

    a {
      text-decoration: none;
    }
  }

  &:hover {
    mark {
      padding-bottom: 0.3em;
    }
  }

  @media (min-width: 900px) {
    font-size: 2.7vmin;
    padding-block: 0;
  }
}
</style>
