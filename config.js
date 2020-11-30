const path = require ('path')

const pathRollback = '../../'

const config = {
    'isProduction': process.env.NODE_ENV === 'production',
    'htmlIndex': 'index.html',
}

config.path = {
    'src': path.resolve (__dirname, pathRollback, '../src'), // source files
    'build': path.resolve (__dirname, pathRollback, '../dist'), // production build files
    'static': path.resolve (__dirname, pathRollback, '../public'), // static files to copy to build folder
    'self': path.resolve (__dirname, './'),
}

config.loader = {
    'postcss': {
        'loader': 'postcss-loader',
        'options': {
            'sourceMap': !config.isProduction,
            'postcssOptions': {
                'config': config.path.self,
            },
        },
    },
}

module.exports = config