module.exports = function (config: {
    set: (arg0: {
      // other configuration options...
      webpack: { module: { rules: { test: RegExp; use: string; }[]; }; };
    }) => void;
  }) {
    config.set({
      // other configuration options...
  
      webpack: {
        module: {
          rules: [
            {
              test: /\.html$/,
              use: 'html-loader'
            }
          ]
        }
      }
    });
  };
  