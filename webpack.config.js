import { join } from 'path'
import MiniCssExtractPlugin, {
    loader as _loader,
} from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProvidePlugin } from 'webpack'

const PATHS = {
    src: join(__dirname, './src'),
    dist: join(__dirname, './dist'),
    assets: 'assets/',
}

export const mode = 'development'
export const externals = {
    path: PATHS,
}
export const entry = {
    app: './src/Demo/index.ts',
}
export const output = {
    filename: `${PATHS.assets}js/[name].[fullhash].js`,
    path: PATHS.dist,
    publicPath: '/',
}
export const optimization = {
    splitChunks: {
        cacheGroups: {
            vendor: {
                name: 'vendors',
                test: /node_modules/,
                chunks: 'all',
                enforce: true,
            },
        },
    },
}
export const module = {
    rules: [
        {
            //файлы
            test: /\.js$/,
            //лоадеры (транспилируют файлы)
            use: ['babel-loader'],
            //исключения
            exclude: '/node_modules/',
        },
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },

        {
            test: /\.(scss|css)$/,
            use: [
                _loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: { config: 'postcss.config.js' },
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
    ],
}
export const resolve = {
    extensions: ['.ts', '.js'],
}
export const devServer = {
    static: {
        directory: './dist',
        watch: true,
    },
    port: 8080,
    open: true,
}
export const plugins = [
    new MiniCssExtractPlugin({
        filename: `${PATHS.assets}css/[name].[fullhash].css`,
    }),
    new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
        template: `${PATHS.src}/Demo/index.html`,
        filename: `./index.html`,
    }),
]
