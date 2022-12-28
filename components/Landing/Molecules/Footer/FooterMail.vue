<script setup>
defineProps({ mail: String, title: String });
</script>

<template>
  <div class="mail-container">
    <LandingAtomsFooterContactTitle :text="title" />
    <LandingAtomsFooterContactLine />
    <LandingAtomsFooterContactMail :text="mail" />
  </div>
</template>

<style lang="scss">
.mail-container {
  margin-bottom: 30px;
}
</style>
