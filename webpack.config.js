const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

let pathsToClean = [
  'dist',
  'build'
]

let cleanOptions = {
  exclude:  ['shared.js'],
}

module.exports = { 
 entry: './src/client/index.js',  
 output: {    
 	filename: 'main.js',    
 	path: path.resolve(__dirname, 'dist')  
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/client/index.html"
  }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions)
 ],
 devServer: {    
 	port: 3000,    
 	open: true,    
 	proxy: {      
 		"/api": "http://localhost:8080"    
 	}}
}
