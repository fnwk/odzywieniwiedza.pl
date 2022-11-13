<script setup>
const { power } = defineProps({
  power: {
    type: Number,
    required: true
  },
});

const scrollY = ref(0);

if (process.client) {
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
  });
}

</script>

<template>
    <!-- <img :style="{transform: translateY(`${power * scrollY}px`)}"/> -->
</template>