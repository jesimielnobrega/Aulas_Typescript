"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objecto = exports.coisas = void 0;
const coisas = ["Lenço", "Casaco", "Cachecol", "Pássaro"];
exports.coisas = coisas;
class pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class objecto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.objecto = objecto;
exports.default = pessoa;
