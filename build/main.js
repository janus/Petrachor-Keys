/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/App.ts":
/*!***************************!*\
  !*** ./src/server/App.ts ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n// import \"../web/util/polyfills\";\nvar configs = __webpack_require__(/*! ../../webpack.config */ \"./webpack.config.js\");\nvar config = configs({}, { mode: \"development\" }).find(function (confg) { return confg.name === \"web\"; });\nvar App = /** @class */ (function () {\n    function App() {\n        this.express = express__WEBPACK_IMPORTED_MODULE_1__();\n        this.express.use(compression__WEBPACK_IMPORTED_MODULE_0__());\n        this.configureMiddleWare();\n        this.configureApi();\n        this.express.use(express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](path__WEBPACK_IMPORTED_MODULE_2__[\"join\"](__dirname, \"../../public\")));\n        this.express.get(\"*\", function (req, res, next) {\n            if (req.path.lastIndexOf(\".\") > req.path.lastIndexOf(\"/\")) {\n                //if this request looks like a static file, ignore it\n                return next();\n            }\n            console.log(__dirname);\n            var filePath;\n            if (true) {\n                filePath = path__WEBPACK_IMPORTED_MODULE_2__[\"resolve\"](__dirname, \"../devmain.html\");\n            }\n            else {}\n            res.sendFile(filePath);\n        });\n    }\n    App.prototype.configureMiddleWare = function () {\n        if (true) {\n            var compiler = webpack__WEBPACK_IMPORTED_MODULE_3__(__assign({}, config, { mode: \"development\" }));\n            this.express.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__(compiler, {\n                publicPath: config.output.publicPath\n            }));\n            this.express.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__(compiler));\n        }\n    };\n    App.prototype.configureApi = function () {\n        return;\n    };\n    return App;\n}());\n\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server\"))\n\n//# sourceURL=webpack:///./src/server/App.ts?");

/***/ }),

/***/ "./src/server/main.ts":
/*!****************************!*\
  !*** ./src/server/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/server/App.ts\");\n\n\nconsole.log(\"this is server\");\nconsole.log(\"server env: \" + \"development\");\nvar app = new _App__WEBPACK_IMPORTED_MODULE_1__[\"App\"]().express;\nvar port = 3000;\napp.set(\"port\", port);\nvar server = http__WEBPACK_IMPORTED_MODULE_0__[\"createServer\"](app);\nserver.listen(port);\nserver.on(\"listening\", onListening);\nfunction onListening() {\n    console.log(\"Listening on port \" + port);\n}\n\n\n//# sourceURL=webpack:///./src/server/main.ts?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ \"path\");\nconst nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nconst HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar config = (env, options) => [ \n    {\n        name: \"web\",\n        entry: options.mode === \"production\" ? [ './src/web/index-client.tsx'] :\n            ['./src/web/index-client.tsx' , 'webpack-hot-middleware/client'],\n        output: {\n            path: path.resolve(__dirname, 'public/build'),\n            publicPath: \"/build/\",\n            filename: 'bundle.js'\n        },\n        module: {\n            rules: [\n                {\n                    test: /\\.tsx?$/, \n                    include: path.resolve(__dirname, \"./src/web\"),\n                    loader: \"awesome-typescript-loader\",\n                    exclude: /node_modules/\n                },\n                {\n                    test: /\\.css$/,\n                    use: options.mode === \"production\" ?\n                    [MiniCssExtractPlugin.loader, \"css-loader\"] :\n                    [\"style-loader\",\"css-loader\"],\n                    exclude: /\\.module\\.css$/\n                },\n                {\n                    test: /\\.(png|jpg|jpeg|gif|svg|ttf|otf|woff|woff2|eot)$/,\n                    loader: 'url-loader?limit=4096'\n                }\n    \n            ]\n        },\n        resolve: {\n            extensions: ['.tsx','.ts','.js']\n        },\n        devtool: options.mode === 'production' ? 'source-map' : 'cheap-module-eval-source-map',\n        plugins: options.mode === \"production\" ? [\n                new MiniCssExtractPlugin(),\n                new HtmlWebpackPlugin({\n                    template: \"./src/template.html\",\n                    hash: true,\n                    filename: \"main.html\",\n                })\n            ] : [new webpack.HotModuleReplacementPlugin()],\n     /**    optimization: {\n            runtimeChunk: 'single',\n            splitChunks: {\n            cacheGroups: {\n                vendor: {\n                test: /[\\\\\\/]node_modules[\\\\\\/]/,\n                name: 'vendors',\n                chunks: 'all'\n                }\n            }\n            }\n        } */\n    },\n    {\n        name: \"server\",\n        entry: ['./src/server/main.ts'],\n        target: 'node',\n        externals: [nodeExternals()],\n    \n        output: {\n            path: path.resolve(__dirname, './build'),\n            filename: '[name].js',\n        },\n        resolve: {\n            extensions: ['.js', '.jsx', '.ts', '.tsx']\n        },\n        module: {\n            rules: [\n                {\n                    test:/\\.tsx?$/,\n                    include: path.resolve(__dirname, \"./src/server/\"),\n                    loader: \"awesome-typescript-loader\"\n                }\n            ]  \n        },\n         node: {\n            __dirname: true,\n            __filename: true\n        }\n       \n    } \n]\n\nmodule.exports = config;\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/server/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/main.ts */\"./src/server/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/server/main.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });