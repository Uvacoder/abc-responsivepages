import { Config } from '@stencil/core';

export const config: Config = {
    taskQueue: 'async',
    // buildEs5: true,
    outputTargets: [
        {
            type: 'www',
            baseUrl: '/',
            prerenderConfig: './prerender.config.ts',
            serviceWorker: {
                unregister: true,
            }
        },
        {
            type: 'dist-hydrate-script',
            dir: 'dist/prerender',
        },
    ],
    globalStyle: 'src/global/style/app.css',
};