/** @type {import('next-i18next').UserConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'en'],
        localeDetection: false,
        localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
    },
    detection: {
        order: ['cookie'],
        caches: ['cookie'],
        lookupCookie: 'NEXT_LOCALE',
        cookieOptions: {
            name: 'NEXT_LOCALE',
            secure: true,
            sameSite: 'strict',
        },
    },
};


module.exports = nextConfig;
