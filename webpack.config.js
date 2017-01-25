var webpack = require('webpack');
var path = require('path');


// var exec = require('child_process').execSync;
// exec('rm -rf dist');


module.exports = {
	entry: {
		app: './src/main.js',
		vendor: ['vue','vue-router']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename:'[name].bundle.js',
		publicPath: 'http://127.0.0.1/dist/',
		chunkFilename: 'chunk/[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},{
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			loader: 'file-loader'
		},{
			test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			loader: 'file-loader',
			query: {
				name: '[name].[ext]?[hash]'
			}
		}]
	},
	resolve: {
		alias: {
			service: path.resolve(__dirname, './src/service/')
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}