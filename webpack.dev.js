import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
	target: ['web'],
	mode: 'development',
	devtool: "inline-source-map",
	entry: path.join(process.cwd(), './dev-only/story/quickstart/boot.js'),
	devServer: {
		hot: true,
		static: {
			directory: path.join(process.cwd(), 'dev-only'),
			publicPath: '/'
		}
	},
	resolve: {
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(process.cwd(), 'dev-only/quickstart.html'),
			filename: 'index.html',
			scriptLoading: 'module'
		})
	],
}