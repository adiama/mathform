import fs from 'fs';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import banner from './utils/banner.js';

const PROD = process.env.NODE_ENV === 'production';
const { name, main } = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url)));

export default [
    // ES6
    {
        input: main,
        output: {
            file: `./dist/${name}.js`,
            format: 'es',
            sourcemap: PROD ? false : 'inline',
            plugins: [{ banner }],
        },
    },

    // ES6 min
    {
        input: main,
        output: {
            file: `./dist/${name}.min.js`,
            format: 'es',
            sourcemap: PROD ? false : 'inline',
            plugins: [
                { banner },
                terser({
                    ecma: 2020,
                    mangle: { toplevel: true },
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: PROD,
                        drop_debugger: PROD,
                    },
                    output: { quote_style: 1 },
                }),
            ],
        },
    },

    // ES5
    {
        input: main,
        output: {
            file: `./dist/${name}.cjs`,
            format: 'cjs',
            sourcemap: PROD ? false : 'inline',
        },
        plugins: [
            { banner },
            getBabelOutputPlugin({
                presets: ['@babel/preset-env'],
            }),
        ],
    },

    // ES5 min
    {
        input: main,
        output: {
            file: `./dist/${name}.min.cjs`,
            format: 'cjs',
            sourcemap: PROD ? false : 'inline',
        },
        plugins: [
            { banner },
            getBabelOutputPlugin({
                presets: ['@babel/preset-env'],
            }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: PROD,
                    drop_debugger: PROD,
                },
                output: { quote_style: 1 },
            }),
        ],
    },

    // Browser
    {
        input: main,
        output: [
            {
                file: `./dist/${name}.umd.js`,
                format: 'umd',
                name: name,
                sourcemap: PROD ? false : 'inline',
                plugins: [
                    { banner },
                    sizeSnapshot(),
                    terser({
                        ecma: 2020,
                        mangle: { toplevel: true },
                        compress: {
                            module: true,
                            toplevel: true,
                            unsafe_arrows: true,
                            drop_console: PROD,
                            drop_debugger: PROD,
                        },
                        output: {
                            comments: /^!/,
                            quote_style: 1,
                        },
                    }),
                ],
            },
        ],
    },
];
