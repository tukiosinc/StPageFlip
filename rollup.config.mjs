import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'dist/js/page-flip.browser.js', format: 'umd', name: 'St' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', declaration: true, declarationDir: 'dist/js' }),
            terser(),
        ],
    },
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'dist/js/page-flip.module.js', format: 'es' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', declaration: false }),
            terser(),
        ],
    },
];
