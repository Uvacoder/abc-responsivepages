const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const tailwind = require('tailwindcss');

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
    plugins: [
        autoprefixer,
        tailwind(),
        production && cssnano({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true
                    }
                },
            ],
        })
    ],
};
