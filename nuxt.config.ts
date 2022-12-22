export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  plugins: ["~/plugins/vue-kinesis.js"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: "Odżywieni Wiedzą",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "Odżywieni wiedzą",
          content:
            "Projekt Odżywieni Wiedzą skupia się wokół problemu zaburzenia odżywiania wśród dzieci oraz młodzieży.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  runtimeConfig: {
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
  },
});
