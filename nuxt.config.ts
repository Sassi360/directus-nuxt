// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@bg-dev/nuxt-directus'],

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      defaultRoleId: process.env.DIRECTUS_DEFAULT_ROLE_ID,
    },
  },
  compatibilityDate: '2024-04-03',

  directus: {
    rest: {
      baseUrl: 'http://localhost:8055',
      nuxtBaseUrl: 'http://localhost:3000',
    },
    auth: {
      enabled: true,
      mode: 'session', // Auth mode 'session' or 'cookie'
      enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
      userFields: ['*'], // Select user fields
      refreshTokenCookieName: 'directus_refresh_token',
      sessionTokenCookieName: 'directus_session_token',
      loggedInFlagName: 'directus_logged_in',
      msRefreshBeforeExpires: 10000,
      redirect: {
        login: '/auth/login', // Path to redirect when login is required
        logout: '/auth/login', // Path to redirect after logout
        home: '/home', // Path to redirect after successful login
        resetPassword: '/auth/reset-password', // Path to redirect for password reset
        callback: '/auth/callback', // Path to redirect after login with provider
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
