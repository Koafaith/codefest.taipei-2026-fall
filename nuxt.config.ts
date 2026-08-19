// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/2026-fall/',
    head: {
      htmlAttrs: { lang: 'zh-TW' },
      title: '2026臺北秋季程式設計節',
      meta: [
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:site_name', content: '2026臺北秋季程式設計節' },
        {
          name: 'description',
          content:
            '城市，就是一座等待探索的巨大冒險地圖！延續「台北通」的服務經驗，2026臺北秋季程式設計節再次集結各路開發好手，以城市通開源架構、開放資料與設計規範為冒險裝備，組隊挑戰城市裡的各種任務，用程式碼打造更便利、更有創意的市政服務。城市冒險集合日：2026年11月7日－11月8日。',
        },
        {
          property: 'og:description',
          content:
            '城市，就是一座等待探索的巨大冒險地圖！延續「台北通」的服務經驗，2026臺北秋季程式設計節再次集結各路開發好手，以城市通開源架構、開放資料與設計規範為冒險裝備，組隊挑戰城市裡的各種任務，用程式碼打造更便利、更有創意的市政服務。城市冒險集合日：2026年11月7日－11月8日。',
        },
        { name: 'robots', content: 'index,follow' },
        { 'http-equiv': 'cache-control', content: 'no-cache' },
        { 'http-equiv': 'expires', content: '0' },
        { 'http-equiv': 'pragma', content: 'no-cache' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
        // {
        //   'http-equiv': 'Content-Security-Policy',
        //   content:
        //     "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.surveycake.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://www.surveycake.com; frame-src 'self' https://www.surveycake.com https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self' https://www.surveycake.com; upgrade-insecure-requests;",
        // },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/2026-fall/favicon.ico' }],
      script: [
        {
          src: '/2026-fall/js/gtm.js',
          type: 'text/javascript',
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_PUBLIC_GA_ID}`,
          async: true,
          crossorigin: 'anonymous',
        },
        {
          src: '/2026-fall/js/ga.js',
          type: 'text/javascript',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      gtmId: process.env.NUXT_PUBLIC_GTM_ID,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    cssPath: '~/assets/main.scss', // 修正為字符串
    configPath: 'tailwind.config.js', // 確保這裡的文件名正確
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  i18n: {
    vueI18n: '~/i18n.config.ts',
    defaultLocale: 'zh',
    locales: [{ code: 'zh', language: 'zh-TW' }],
  },
});
