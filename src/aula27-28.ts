interface cur{
    Tipo:string;
    Desc:string;
    N_alunos:number;
    N_aulas:number;
}
interface cur_arte extends cur{
    Materiais:number;
    t_arte:number;
}
let m:cur={
    Tipo:"Jesimiel",
    Desc:"Curso de Typescript",
    N_alunos:150,
    N_aulas:500
}

let teste:cur_arte={
    Tipo:"Desenho técnico",
    Desc:"Curso de desenho técnico",
    N_alunos:200,
    N_aulas:100,
    Materiais:20,
    t_arte:2
}

console.log(teste);