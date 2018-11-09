const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

function sassRules () {
    return [{
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }];
}

function scriptRules () {
    return [{
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
    }];
}

function vueRules () {
    return [{
        test: /\.vue$/,
        loader: 'vue-loader'
    }];
}

module.exports = {
    entry: [
        './resources/assets/sass/app.scss',
        './resources/assets/scripts/app.js'
    ],
    output: {
        filename: '../public/app.js',
        path: __dirname + '/public'
    },
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.esm.js' },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: { rules: sassRules().concat(scriptRules()).concat(vueRules()) },
    plugins: [
        new webpack.ProgressPlugin(),
        new ExtractTextPlugin({ filename: '../public/app.css' }),
        new VueLoaderPlugin({ filename: '../public/vue.js' })
    ]
}
