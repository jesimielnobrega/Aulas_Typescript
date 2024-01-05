class Curso{
    canal:string;
    curso:string;
    constructor(canal:string, curso:string){
        this.canal=canal;
        this.curso=curso;
    }
}

let t= new Curso("Jesimiel","Typescript");
console.log(t.curso);
console.log(t.canal);