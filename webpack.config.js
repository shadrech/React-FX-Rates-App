var webpack = require('webpack');

var config = {
	devtool: "eval-source-map",
	entry: __dirname + "/app/App.js",
	output: {
		path: __dirname + "/public/assets",
		filename: "app.js"
	},
	module: {
	    rules: [{
	    	test: /\.js?$/,
	      	exclude: /node_modules/,
	      	use: {
	        	loader: "babel-loader",
	        	options: {
	          		presets: ["react","es2015"]
	        	}
	      	}
	    }, {
	      	test: /\.scss$/,
	      	use: ["style-loader","css-loader","autoprefixer-loader","sass-loader"]
	    }, {
	    	test: /\.css$/,
	    	use: ["style-loader","css-loader"]
	    }]
	},
	devServer: {
	    contentBase: "./public",
	    publicPath: "/assets/",
	    historyApiFallback: true,
	    inline: true,
	    port: 9000
	}
};

/* If bundling for production, optimize output, no sourcemaps */
if (process.env.NODE_ENV === "production") {
  	delete config.devtool;

  	config.plugins = [
    	//https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
    	new webpack.DefinePlugin({
      		"process.env": {
        		NODE_ENV: JSON.stringify("production")
	      	}
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      	comments: false,
	      	compress: {
	        	warnings: true
	    	}
	    })
  	];
}

module.exports = config;