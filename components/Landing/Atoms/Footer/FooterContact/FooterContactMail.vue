<script setup>
defineProps({ text: String });
</script>

<template>
  <NuxtLink :to="'mailto:' + text">{{ text }}</NuxtLink>
</template>
