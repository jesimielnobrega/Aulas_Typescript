"use strict";
function tent(v) {
    return v;
}
console.log(tent(20));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    publicar() {
        console.log(this.valor);
    }
}
let CT1 = new C_teste(40);
CT1.publicar();
