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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./array.js":
/*!******************!*\
  !*** ./array.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.map = map;\nexports.reduce = reduce;\nexports.filter = filter;\n// TRABALHANDO COM ARRAY NO ES6\nvar array = [1, 2, 6, 9];\n\nfunction map() {\n  // percorre todo array e retorna a logica determinada dentro da função\n  var newArray = array.map(function (valor) {\n    return valor * 2;\n  });\n  console.log(array, newArray); // [1, 2, 6, 9], [2, 4, 12, 18]\n}\n\nfunction reduce() {\n  // pega o valor atual e o proximo e retorna o que for determinado na logica\n  var totalArray = array.reduce(function (total, proximo) {\n    return total + proximo;\n  });\n  return totalArray; // 18 = 1 + 2 + 6 + 9\n}\n\nfunction filter() {\n  // retorna apenas o que derem o resultado verdadeiro\n  var filter = array.filter(function (valor) {\n    // retornar apenas os pares\n    return valor % 2 == 0; // return valor == 9 retornaria apenas os valores 9 por exemplo\n  });\n  console.log(filter); // [2, 6]\n}\n\n//# sourceURL=webpack:///./array.js?");

/***/ }),

/***/ "./classes.js":
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// EXEMPLO DE CLASSE\nvar TodoList =\n/*#__PURE__*/\nfunction () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    this.list = [];\n  }\n\n  _createClass(TodoList, [{\n    key: \"addToto\",\n    value: function addToto() {\n      this.list.push(\"NOVO TODO\");\n      console.log(this.list);\n    }\n  }]);\n\n  return TodoList;\n}();\n\nexports[\"default\"] = TodoList;\n\n//# sourceURL=webpack:///./classes.js?");

/***/ }),

/***/ "./desestruturacao.js":
/*!****************************!*\
  !*** ./desestruturacao.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.desestruturacao = desestruturacao;\n\n// DESESTRUTURAÇÃO\nfunction desestruturacao() {\n  var usuario = {\n    nome: 'Luan',\n    idade: 19,\n    endereco: {\n      cidade: 'Pelotas',\n      estado: 'RS'\n    }\n  };\n  var nome = usuario.nome,\n      idade = usuario.idade,\n      cidade = usuario.endereco.cidade;\n  console.log(nome, idade, cidade);\n}\n\n//# sourceURL=webpack:///./desestruturacao.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _desestruturacao = __webpack_require__(/*! ./desestruturacao */ \"./desestruturacao.js\");\n\nvar _array = __webpack_require__(/*! ./array */ \"./array.js\");\n\nvar restSpread = _interopRequireWildcard(__webpack_require__(/*! ./rest_spread */ \"./rest_spread.js\"));\n\nvar _classes = _interopRequireDefault(__webpack_require__(/*! ./classes */ \"./classes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj[\"default\"] = obj; return newObj; } }\n\n//Importando uma função\n(0, _desestruturacao.desestruturacao)(); //Importando mais de uma função e renomeando com as\n\n(0, _array.filter)();\n(0, _array.map)();\nconsole.log((0, _array.reduce)()); //Importando todas funções e colocando dentro de uma variavel, assim, criando um objeto\n\nrestSpread.restExemplo();\nrestSpread.spreadExemplo(); //Importando por default\n\nvar c = new _classes[\"default\"]();\nc.addToto();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./rest_spread.js":
/*!************************!*\
  !*** ./rest_spread.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.restExemplo = restExemplo;\nexports.spreadExemplo = spreadExemplo;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nvar array1 = [1, 2, 3, 4];\nvar array2 = [5, 6, 7, 8]; // REST\n\nfunction restExemplo() {\n  var pessoa = {\n    sexo: 'M',\n    idade: 19,\n    alutra: 1.65\n  };\n\n  var sexo = pessoa.sexo,\n      resto = _objectWithoutProperties(pessoa, [\"sexo\"]);\n\n  console.log(sexo, resto);\n  var a = array1[0],\n      b = array1[1],\n      c = array1.slice(2);\n  console.log(a, b, c);\n\n  function soma(a) {\n    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      params[_key - 1] = arguments[_key];\n    }\n\n    return params.reduce(function (total, next) {\n      return total + next;\n    }) - a;\n  }\n\n  console.log(soma(1, 2, 3));\n} // SPREAD\n\n\nfunction spreadExemplo() {\n  var array3 = [].concat(array1, array2);\n  console.log(array3);\n  var usuario1 = {\n    nome: \"Gerald\",\n    idade: 37\n  };\n\n  var usuario2 = _objectSpread({}, usuario1, {\n    idade: 49\n  });\n\n  console.log(usuario1, usuario2);\n}\n\n//# sourceURL=webpack:///./rest_spread.js?");

/***/ })

/******/ });