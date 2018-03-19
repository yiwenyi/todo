const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target:'web',
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist'),
    // publicPath: path.join(__dirname, 'dist'),
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.jsx$/,
        loader:'babel-loader'
      },
      {
        test: /\.(jpg|gif|jpeg|png|svg|ttf)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV :isDev? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    })
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'  
  config.devServer = {
    port:8000,
    host:'0.0.0.0',
    overlay:{
      errors:true
    },
    // open:true,//每次npm run dev的时候会自动打开浏览器
    hot:true
  },
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}else{
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    verdor:['vue']
  }
  //hash 整个应用的哈希 chunkhash 单独哈希 没有变动的不产生新哈希  ==》改entry push插件
  config.output.filename = '[name].[chunkhash:8].js' 
  config.module.rules.push({
    test: /\.styl$/,
    use: ExtractPlugin.extract({
      fallback:'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          }
        },
        'stylus-loader'
      ]
    })
  }),
  config.plugins.push(
    new ExtractPlugin('style.[contenthash:8].css'),
    //分开打包类库代码与业务代码 便于类库在浏览器产生缓存
    new webpack.optimize.CommonsChunkPlugin({
      name:'verdor'
    }),
    //打包webpack相关代码 避免加入新模块改变id 重新产生hash runtime必须在verder后
    new webpack.optimize.CommonsChunkPlugin({
      name:'runtime'
    }),
  )
}

module.exports = config