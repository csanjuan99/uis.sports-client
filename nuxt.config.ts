// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL,
        }
    },
    modules: ["@nuxt/ui", "@nuxt/content", "@nuxthq/studio", "@nuxt/image"],

    components: {
        global: true,
        dirs: [
            '~/components',
        ]
    },

    css: ['~/assets/css/tailwind.css', "~/assets/css/main.css"],

    tailwindcss: {
        configPath: '~/tailwind.config.ts',
        cssPath: '~/assets/css/tailwind.css',
    },

    routeRules: {
        '/': {prerender: true}
    },
})
