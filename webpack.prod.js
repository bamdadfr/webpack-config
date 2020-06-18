const merge = require ('webpack-merge')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const TerserJSPlugin = require ('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')
const common = require ('./webpack.common.js')
const config = require ('./config')

module.exports = merge (common, {
    'mode': 'production',
    // 'devtool': false,
    'output': {
        'path': config.path.build,
        'publicPath': '/',
        'filename': 'assets/js/[name].[contenthash].bundle.js',
    },
    'plugins': [
    /**
     * MiniCssExtractPlugin
     *
     * Extracts CSS into separate files.
     *
     * Note: style-loader is for development, MiniCssExtractPlugin is for production.
     * They cannot be used together in the same config.
     */
        new MiniCssExtractPlugin ({
            'filename': 'styles/[name].[contenthash].css',
            'chunkFilename': 'assets/css/[id].css',
        }),
    ],
    'module': {
        'rules': [
            {
                'test': /\.(scss|css)$/,
                'use': [
                    MiniCssExtractPlugin.loader,
                    {
                        'loader': 'css-loader',
                        'options': {
                            'importLoaders': 1,
                        },
                    },
                    config.loader.postcss,
                    'sass-loader',
                ],
            },
        ],
    },

    /**
   * Optimization
   *
   * Production minimizing of JavaSvript and CSS assets.
   */
    'optimization': {
        'minimizer': [new TerserJSPlugin ({}), new OptimizeCSSAssetsPlugin ({})],
        // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
        // instead of having their own. This also helps with long-term caching, since the chunks will only
        // change when actual code changes, not the webpack runtime.
        'runtimeChunk': 'single',
        // This breaks apart commonly shared deps (react, semantic ui, etc) into one shared bundle. React, etc
        // won't change as often as the app code, so this chunk can be cached separately from app code.
        'splitChunks': {
            'cacheGroups': {
                'vendor': {
                    'test': /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
                    'name': 'vendors',
                    'chunks': 'all',
                },
            },
        },
    },
    'performance': {
        'hints': false,
        'maxEntrypointSize': 512000,
        'maxAssetSize': 512000,
    },
})
