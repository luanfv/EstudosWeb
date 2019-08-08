"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

alert("Hello"); // EXEMPLO DE CLASSE

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.list = [];
  }

  _createClass(TodoList, [{
    key: "addToto",
    value: function addToto() {
      this.list.push("NOVO TODO");
      console.log(this.list);
    }
  }]);

  return TodoList;
}();

var list = new TodoList(); // TRABALHANDO COM ARRAY NO ES6
// percorre todo array e retorna a logica determinada dentro da função

var array = [1, 2, 6, 9];
var newArray = array.map(function (valor) {
  return valor * 2;
});
console.log(array, newArray); // [1, 2, 6, 9], [2, 4, 12, 18]
// pega o valor atual e o proximo e retorna o que for determinado na logica

var totalArray = array.reduce(function (total, proximo) {
  return total + proximo;
});
console.log(totalArray); // 18 = 1 + 2 + 6 + 9
// retorna apenas o que derem o resultado verdadeiro

var filter = array.filter(function (valor) {
  // retornar apenas os pares
  return valor % 2 == 0; // return valor == 9 retornaria apenas os valores 9 por exemplo
});
console.log(filter); // [2, 6]
// ARROW FUNCTIONS
// maneira alternativa de fazer funções que tem apenas o retorno como logica

var arrayFunction = array.map(function (valor) {
  return valor * 2;
});
console.log(arrayFunction); // função menos verbosa

var teste1 = function teste1() {
  return 6;
};

console.log(teste1()); // 6

var teste2 = function teste2() {
  return {
    nome: 'Luan',
    sexo: 'M'
  };
};

console.log(teste2()); // {nome: 'Luan', sexo: 'M'}
// DESESTRUTURAÇÃO

var usuario = {
  nome: 'Luan',
  idade: 19,
  endereco: {
    cidade: 'Pelotas',
    estado: 'RS'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade); // REST

var pessoa = {
  sexo: 'M',
  idade: 19,
  alutra: 1.65
};

var sexo = pessoa.sexo,
    resto = _objectWithoutProperties(pessoa, ["sexo"]);

console.log(sexo, resto);
var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];
var a = array1[0],
    b = array1[1],
    c = array1.slice(2);
console.log(a, b, c);

function soma(a) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  }) - a;
}

console.log(soma(1, 2, 3)); // SPREAD

var array3 = [].concat(array1, array2);
console.log(array3);
var usuario1 = {
  nome: "Gerald",
  idade: 37
};

var usuario2 = _objectSpread({}, usuario1, {
  idade: 49
});

console.log(usuario1, usuario2);
