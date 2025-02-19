// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'ZSP',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'ZSP',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    compatibilityDate: '2024-11-01',

    devtools: { enabled: true },

    // css: ['~/assets/css/main.css'],

    // image: {
    //     providers: {
    //         local: {
    //             provider: 'ipx',
    //         },
    //     },
    // },

    // colorMode: {
    //     preference: 'light',
    //     fallback: 'light',
    // },

    // fonts: {
    //     families: [
    //         {
    //             name: 'Montserrat',
    //             provider: 'google',
    //             styles: ['normal', 'italic', 'oblique'],
    //             weights: [
    //                 '100',
    //                 '200',
    //                 '300',
    //                 '400',
    //                 '500',
    //                 '600',
    //                 '700',
    //                 '800',
    //                 '900',
    //             ],
    //         },
    //     ],
    // },

    // ui: {
    //     fonts: true,
    // },
})
