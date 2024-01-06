const coisas=["Lenço", "Casaco","Cachecol","Pássaro"]
class pessoa{
    nome:string;
    idade:number;
    constructor(nome:string,idade:number){
        this.nome=nome;
        this.idade=idade;
    }
}

class objecto{
    nome:string;
    constructor(nome:string){
        this.nome=nome;
    }
}

export default pessoa;

export {coisas, objecto};