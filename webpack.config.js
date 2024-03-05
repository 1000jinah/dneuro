const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, 'src/routes/main.ts'),
    },
    output: {
        path: path.resolve(__dirname, '../dneuro-back/src/main/resources/static'),
        publicPath: '/',
        filename: 'bundle.[chunkhash].js',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@@': path.resolve(__dirname, '/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json', '.jpg', '.png'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                include: [
                    path.resolve(__dirname, 'src/'),
                ],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {}],
                                ['@babel/preset-typescript', {
                                    allExtensions: true,
                                }],
                            ],
                            plugins: [],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|eot|ttf|woff|woff2|gif|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires >= sass-loader@^8.0.0
                        options: {
                            // implementation: require('sass'),
                            // sassOptions: {
                            //     indentedSyntax: true // optional
                            // },
                            additionalData: "@import '@/assets/scss/variables.scss';",
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires >= sass-loader@^8.0.0
                        options: {
                            // implementation: require('sass'),
                            // sassOptions: {
                            //     indentedSyntax: true // optional
                            // },
                            additionalData: "@import '@/assets/scss/variables.scss';",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/routes/index.html'),
        }),
        new CleanWebpackPlugin({}),
        new VueLoaderPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 80,
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
};
