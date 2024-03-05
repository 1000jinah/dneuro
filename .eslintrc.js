module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        'linebreak-style': 0, // Disable CR LF
        'max-len': 0, // Disable Line Maximum Length Limit
        'no-param-reassign': ['error', { props: false }], // Disable param reassign
        indent: ['error', 4], // tab size 4
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // Enable smart tab
        'no-new': 0, // Disable no new
        'vue/comment-directive': 0,
        'import/extensions': [
            'error',
            'ignorePackages', {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'never',
            },
        ],
    },
};
