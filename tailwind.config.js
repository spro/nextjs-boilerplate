module.exports = {
    mode: 'jit',
    purge: {
        content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
        options: {
            safelist: [/^bg-/, /^text-/]
        }
    },
    darkMode: 'media',
    theme: {
        extend: {
            animation: {
                'spin-reverse': 'spin 1s linear infinite reverse'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
