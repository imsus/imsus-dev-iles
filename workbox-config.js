module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{js,html,woff2,css,ico,png,avif,webp,mjs,json,webmanifest,xml}'
  ],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ]
};