"use strict";
class Curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let t = new Curso("Jesimiel", "Typescript");
console.log(t.curso);
console.log(t.canal);
