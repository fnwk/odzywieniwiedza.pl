<script setup>
const { link } = defineProps({
  link: {
    type: String,
  },
});
</script>

<template>
  <li>
    <mark>
      {{ link }}
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
