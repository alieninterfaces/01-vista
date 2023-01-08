const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Sass = require('sass');

const config = (env, argv)=>({
    mode: argv.mode === 'production'? 'production' : 'development',
    entry: {
      app: './src/index.ts',
    },
    devServer: {
      port: 4300,
      host: 'localhost',
      https: true,
      historyApiFallback: true
    },
    //devtool: argv.mode === 'production'? 'none' : 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        chunks : ['app'],
        cache: false,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/assets/", to: "assets/" },
          { from: "src/static/", to: "static/" },
        ],
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.html$/,
            use: [{
              loader: 'html-loader',
              options: {
                sources: false,
                esModule: false,
              },
            }],
            exclude: /node_modules/

          },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {
                        //exportType: 'string'
                    }},
                    //{loader: 'lit-css-loader'}
                ]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
            {
                test: /\.litscss$/,
                loader: 'lit-css-loader',
                options: {
                  transform: (data, { filePath }) =>
                    Sass.renderSync({ data, file: filePath })
                      .css.toString(),
                }
            },
            {
              test: /\.(webmanifest|ico|png|gif|jpg|cur)$/i,
              loader: 'url-loader', options: {limit: 8192}
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
});

module.exports = config;
