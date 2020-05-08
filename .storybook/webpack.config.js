const path = require('path');

module.exports = async ({config}) => {
  config.resolve = {
    alias: {
      mdbsvelte: path.resolve(__dirname, '../src/')
    },
    extensions: [...config.resolve.extensions, '.svelte']
  };

  return config;
};
