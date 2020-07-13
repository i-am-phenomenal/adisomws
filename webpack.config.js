// const path = require('path');
// const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         chunkFilename: '[id].js',
//         publicPath: ''
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.css$/,
//                 exclude: /node_modules/,
//                 use: [
//                     { loader: 'style-loader' },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             modules: {
//                                 localIdentName: "[name]__[local]___[hash:base64:5]",
//                             },
//                             sourceMap: true
//                         }
//                      },
//                      {
//                          loader: 'postcss-loader',
//                          options: {
//                              ident: 'postcss',
//                              plugins: () => [
//                                  autoprefixer({})
//                              ]
//                          }
//                       }
//                 ]
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/,
//                 loader: 'url-loader?limit=10000&name=img/[name].[ext]'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: __dirname + '/src/index.html',
//             filename: '/src/index.html',
//             inject: 'body'
//         })
//     ]
// };

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Webpack uses this to work with directories
const path = require('path');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ],
      include: /\.module\.css$/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
      exclude: /\.module\.css$/
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // Prefer `dart-sass`
            implementation: require('sass'),
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
  ]
},

 //  module: {
 //   rules: [
 //     {
 //       test: /\.css$/,
 //       use: [
 //          MiniCssExtractPlugin.loader,
 //         'css-loader'
 //       ]
 //     }
 //   ]
 // },
 // plugins: [
 //   new MiniCssExtractPlugin(),
 // ],
 //  module: {
 //   rules: [
 //     {
 //       test: /\.css$/,
 //       use: [
 //         // style-loader
 //         { loader: 'style-loader' },
 //         // css-loader
 //         {
 //           loader: 'css-loader',
 //           options: {
 //             modules: true
 //           }
 //         },
 //         // sass-loader
 //         { loader: 'sass-loader' },
 //       ]
 //     }
 //   ]
 // },

//   module: {
//     rules: [
//     {
//       test: /\.js$/,
//       exclude: /(node_modules)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     }
// ]
// },

//     rules: [
//     {
//       test: /\.js$/,
//       exclude: /(node_modules)/,
//       use: [
//              {
//                // This loader resolves url() and @imports inside CSS
//                loader: "css-loader",
//              },
//              {
//                // Then we apply postCSS fixes like autoprefixer and minifying
//                loader: "postcss-loader"
//              },
//              {
//                // First we transform SASS to standard CSS
//                loader: "sass-loader",
//                options: {
//                  implementation: require("sass")
//                }
//              }
//            ]
//       // use: {
//       //   loader: 'babel-loader',
//       //   options: {
//       //     presets: ['@babel/preset-env']
//       //   }
//       // }
//     }
// ]

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: 'production'
};
