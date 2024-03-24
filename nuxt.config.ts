// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, resolve } from 'path';
export default defineNuxtConfig({
    alias: {
        '@': resolve(__dirname, '/'),
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    $production: {
        routeRules: {
            '/**': { isr: true },
        },
    },
    $development: {
        //
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/_colors.scss" as *;',
                },
            },
        },
    },
});
