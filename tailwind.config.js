module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                horizontal: '2 / 1',
                vertical: '1 / 2',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
