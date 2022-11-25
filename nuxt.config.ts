export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  plugins: ['~/plugins/vue-kinesis.js'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});
