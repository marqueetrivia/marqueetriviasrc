// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/theme/_variables.scss'),
        path.resolve(__dirname, './src/styles/theme/_mixins.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Marquee Trivia',
  siteUrl: 'https://www.marqueetrivia.com',
  titleTemplate: 'Marquee Trivia - %s',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://localhost:8000',
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        customEndpoints: [
          {
            typeName: "NextTriviaEvent",
            route: "/trivia/v1/next_event",
            normalize: true,
          },
        ],
      },
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-NQCF3XR',
        enabled: true,
        debug: false
      }
    },
  ],
  templates: {
    WordPressTriviaevent: '/triviaevent/:slug'
  },
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
