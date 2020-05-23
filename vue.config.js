// const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/reset.scss";`
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
};
