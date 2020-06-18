const { CleanWebpackPlugin } = require ('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const config = require ('./config')

module.exports = {
    /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
    'entry': [config.path.src + '/index.js'],

    /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
    'output': {
        'path': config.path.build,
        'filename': '[name].bundle.js',
        'publicPath': '/',
    },

    /**
   * Plugins
   *
   * Customize the Webpack build process.
   */
    'plugins': [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
        new CleanWebpackPlugin (),

        /**
     * CopyWebpackPlugin
     *
     * Copies files from target to destination folder.
     */
        new CopyWebpackPlugin ({ 'patterns': [
            {
                'from': config.path.static,
                'to': '',
                'globOptions': {
                    'ignore': ['*.DS_Store'],
                },
            },
        ] }),

        /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
        new HtmlWebpackPlugin ({
            // 'title': '',
            'favicon': config.path.static + '/favicon.png',
            'template': config.path.src + '/' + config.htmlIndex, // template file
            'filename': 'index.html', // output file
        }),
    ],

    /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
    'module': {
        'rules': [
            /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
            {
                'test': /\.js$/,
                'exclude': /node_modules/,
                'use': [
                    {
                        'loader': 'babel-loader',
                        'options': {
                            'presets': ['@babel/preset-env'],
                            'plugins': ['@babel/plugin-proposal-class-properties'],
                        },
                    },
                    'eslint-loader',
                ],
            },

            /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
            {
                'test': /\.(scss|css)$/,
                'use': [
                    'style-loader',
                    {
                        'loader': 'css-loader',
                        'options': { 'sourceMap': !config.isProduction, 'importLoaders': 1 },
                    },
                    config.loader.postcss,
                    {
                        'loader': 'sass-loader',
                        'options': { 'sourceMap': !config.isProduction },
                    },
                ],
            },

            /**
       * Images
       *
       * Copy image files to build folder.
       */
            {
                'test': /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                'loader': 'file-loader',
                'options': {
                    // 'name': '[path][name].[ext]',
                    'name': 'assets/images/[name].[ext]',
                    'context': 'src', // prevent display of src/ in filename
                },
            },

            /**
       * Fonts
       *
       * Inline font files.
       */
            {
                'test': /\.(woff(2)?|eot|ttf|otf|)$/,
                'loader': 'url-loader',
                'options': {
                    'limit': 8192,
                    // 'name': '[path][name].[ext]',
                    'name': 'assets/fonts/[name].[ext]',
                    'context': 'src', // prevent display of src/ in filename
                },
            },
        ],
    },
}
