#

<p align=center>
    Bamdad Sabbagh's webpack config
</p>

<p align=center>
    <img src="https://img.shields.io/github/v/release/bamdadsabbagh/webpack-config">
    <img src="https://api.codeclimate.com/v1/badges/6891219ecb0b930cb5e7/maintainability">
</p>

<p align=center>
    <img src="https://img.shields.io/david/bamdadsabbagh/webpack-config">
    <img src="https://img.shields.io/david/dev/bamdadsabbagh/webpack-config">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/bamdadsabbagh/webpack-config">
</p>

## Vendor

> [webpack](https://webpack.js.org/) config.

## npm

> [npm](https://www.npmjs.com/package/@bamdadsabbagh/webpack-config) package.

## Installation

```shell
yarn add --dev @bamdadsabbagh/webpack-config
```

## Usage

```json
{
    "start": "cross-env NODE_ENV=development webpack-dev-server --config node_modules/@bamdadsabbagh/webpack-config/webpack.dev.js",
    "build": "yarn build:clean && yarn build:webpack && yarn build:serve",
    "build:clean": "rm -rf dist/",
    "build:webpack": "cross-env NODE_ENV=production webpack --config node_modules/@bamdadsabbagh/webpack-config/webpack.prod.js",
    "build:serve": "serve -s dist/"
}
```
