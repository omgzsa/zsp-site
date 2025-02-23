export default defineAppConfig({
    links: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about-me' },
        { label: 'Gallery', to: '/gallery' },
    ],
    contact: {
        // phone: '(+36) 99 999 396',
        // email: 'info@deintax.eu',
        // address: '9400 Sopron, Ágfalvi út 16/1/2',
        // address2: '9022 Győr, Móricz Zsigmond rkp. 1/A/Fsz/9',
    },
    toaster: {
        position: 'bottom-right' as const,
        expand: true,
        duration: 5000,
    },
    theme: {
        radius: 0.25,
        blackAsPrimary: false,
    },
    ui: {
        colors: {
            primary: 'indigo',
            neutral: 'neutral',
        },
    },
})
