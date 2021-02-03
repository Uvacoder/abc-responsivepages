import { Config } from '@stencil/core';

export const config: Config = {
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            baseUrl: '/',
            prerenderConfig: './prerender.config.ts',
            serviceWorker: {
                unregister: true,
            },
            copy: [
                { src: '../src/assets', dest: 'assets' },
            ],
        },
        {
            type: 'dist-hydrate-script',
            dir: 'dist/prerender',
        },
    ],
    globalStyle: 'src/global/style/app.css',
};