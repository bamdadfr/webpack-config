const path = require ('path')

const config = {
    'isProduction': process.env.NODE_ENV === 'production',
    'htmlIndex': 'index.html',
}

config.path = {
    'src': path.resolve (__dirname, '../src'), // source files
    'build': path.resolve (__dirname, '../dist'), // production build files
    'static': path.resolve (__dirname, '../public'), // static files to copy to build folder
    'self': path.resolve (__dirname, './'),
}

config.loader = {
    'postcss': {
        'loader': 'postcss-loader',
        'options': {
            'sourceMap': !config.isProduction,
            'config': {
                'path': config.path.self,
            },
        },
    },
}

module.exports = config