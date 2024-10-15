// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@bg-dev/nuxt-directus',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n',
  ],

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      defaultRoleId: process.env.DIRECTUS_DEFAULT_ROLE_ID,
    },
  },
  compatibilityDate: '2024-04-03',

  directus: {
    rest: {
      baseUrl: process.env.DIRECTUS_REST_BASE_URL!,
      nuxtBaseUrl: process.env.DIRECTUS_REST_NUXT_BASE_URL!,
    },
    auth: {
      enabled: true,
      mode: 'session',
      enableGlobalAuthMiddleware: false,
      userFields: ['*'],
      refreshTokenCookieName: 'directus_refresh_token',
      sessionTokenCookieName: 'directus_session_token',
      loggedInFlagName: 'directus_logged_in',
      msRefreshBeforeExpires: 10000,
      redirect: {
        login: '/auth/login',
        logout: '/auth/login',
        home: '/portal',
        resetPassword: '/auth/reset-password',
        callback: '/auth/callback', // Path to redirect after login with provider
      },
    },
  },
})
