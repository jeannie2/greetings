const { i18n } = require('./next-i18next.config')

module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/themes/bday',
        permanent: true
      }
    ]
  }
}
