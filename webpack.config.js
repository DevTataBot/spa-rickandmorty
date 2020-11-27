// Permite el acceso a las carpetas
const path = require('path')
// Archivo necesario para trabajar con HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // Se encuentra toda la configuracion de lo que va a suceder
    // Modulo a exportar

    // Punto de entrada. Vive el codigo inicial
    entry:'./src/index.js',
    // Se envia el proyecto listo a produccion
    output: {
        // Se crea el lugar a donde se exportará el proyecto
        path: path.resolve(__dirname,'dist'),
        // Nombre del archivo final para producción
        filename: 'main.js'
    },
    resolve: {
        // Extenciones que se v a trabajar
        extensions: ['.js'],
    },
    // Se crea un modulo con reglas
    module: {
        rules: [
            {
                // Estructura de babel
                // Permite identificar los archivos segun se encuentran en el entorno
                test: /\.js?$/,
                // Se excluye la carpeta node modules
                exclude: /node_modules/,
                use: {
                    // Utilza el loader como conf establecida
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // Plugins que se van a usar
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            // dirección del template principal
            template: './public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            }] 
        })
    ]
}