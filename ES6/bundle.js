"use strict";

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
