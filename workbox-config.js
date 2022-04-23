module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,woff,woff2,css,ico,png,avif,webp,json,webmanifest,xml}'
  ],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  clientsClaim: true,
  skipWaiting: true,
};