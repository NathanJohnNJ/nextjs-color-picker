const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = { 
  resolve: {      
      alias: {          
          'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
      }  
  },  
  plugins:[
    new ExtractTextPlugin({
        filename: 'myUnflappableComponent.css',
    }),
  ],
  module:{
    rules:[
      {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : [
            'css-loader',§§§§§§§§§§§§§§§
          ]
        })
      },
    ]
  },
  externals: {      
      // Don't bundle react or react-dom      
      react: {          
          commonjs: "react",          
          commonjs2: "react",          
          amd: "React",          
          root: "React"      
      },      
      "react-dom": {          
          commonjs: "react-dom",          
          commonjs2: "react-dom",          
          amd: "ReactDOM",          
          root: "ReactDOM"      
      }  
  } 
}