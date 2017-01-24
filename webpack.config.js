var path = require('path');

module.exports = {
	entry: {
		app: ['./src/main.js']
	},
	output: {
		path:'./dist',
		filename:'[name].bundle.js'
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
			components: path.resolve(__dirname, './src/components')
		}
	},
	plugins: []
}