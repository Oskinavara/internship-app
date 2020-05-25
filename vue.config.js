const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/styles/main.scss";`
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/styles/*.scss')]
    }
  }
};
