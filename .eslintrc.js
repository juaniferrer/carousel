module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-shadow': 0,
    'react/forbid-prop-types': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
