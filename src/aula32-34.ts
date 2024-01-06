
enum Cores{"Vermelho","Azul","Preto","Cinza"}
namespace veiculos{
    abstract class carro{
        private nome:string;
        private motor:equipamentos.motor;
        private cor:string;
        constructor(nome:string, cor:Cores,motor:equipamentos.motor){
            this.nome=nome;
            this.motor= motor;
            this.cor=Cores[cor];
        }
        public ligar(){
            this.motor.liga=true;
        }
        public desligar(){
            this.motor.liga=false;
        }
        get minha_cor(){
            return this.cor;
        }
        get meu_nome(){
            return this.nome;
        }
        get estou_ligado(){
            return (this.motor.liga?"Sim":"Não");
        }
        get potencia(){
            return this.motor.potencia;
        }
    }

    export class carroesportivo extends carro{
        constructor(nome:string,cor:Cores){
            super(nome,cor, new equipamentos.motor(300,8,new equipamentos.turbo(100)))
        }
    }
    export class carroPopular extends carro{
        constructor(nome:string,cor:Cores){
            super(nome,cor, new equipamentos.motor(200,5))
        }
    }
}
namespace equipamentos{
    export class motor{
        private pot:number;
        private ligado:boolean;
        private cilindros:number;
        constructor(potencia:number,cilindros:number,turbo?:turbo){
            this.pot=potencia + (turbo?turbo.potencia:0);
            this.cilindros=cilindros;
            this.ligado=false;
        }
        set liga(v:boolean){
            this.ligado=v;
        }
        get liga(){
            return this.ligado;
        }
        get potencia(){
            return this.pot;
        }
    }
    export class turbo{
        private pot:number;
        constructor(pot:number){
            this.pot=pot;
        }
        get potencia(){
            return this.pot;
        }
    }
}
const carro1= new veiculos.carroesportivo("Ford-GT",1);

const carro2 = new veiculos.carroPopular("Ferrari Califórnia",3);
carro1.ligar();

carro2.ligar();

carro1.desligar();

console.log(`Nome do carro: ${carro1.meu_nome}`)
console.log(`Cor: ${carro1.minha_cor}`)
console.log(`Potência: ${carro1.potencia}`)
console.log(`Ligado: ${carro1.estou_ligado}`)
console.log("___________________________________")
console.log(`Nome do carro: ${carro2.meu_nome}`)
console.log(`Cor: ${carro2.minha_cor}`)
console.log(`Potência: ${carro2.potencia}`)
console.log(`Ligado: ${carro2.estou_ligado}`)
