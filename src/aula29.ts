function tent<t,u>(v:u):u{
    return v;   
}

console.log(tent<string,number>(20))

class C_teste<t>{
    private valor:t;
    constructor(valor:t){
        this.valor=valor;
    }
    publicar(){
        console.log(this.valor)
    }
}

let CT1= new C_teste<number>(40);

CT1.publicar();