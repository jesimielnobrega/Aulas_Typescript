"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Azul"] = 1] = "Azul";
    Cores[Cores["Preto"] = 2] = "Preto";
    Cores[Cores["Cinza"] = 3] = "Cinza";
})(Cores || (Cores = {}));
var veiculos;
(function (veiculos) {
    class carro {
        nome;
        motor;
        cor;
        constructor(nome, cor, motor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minha_cor() {
            return this.cor;
        }
        get meu_nome() {
            return this.nome;
        }
        get estou_ligado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get potencia() {
            return this.motor.potencia;
        }
    }
    class carroesportivo extends carro {
        constructor(nome, cor) {
            super(nome, cor, new equipamentos.motor(300, 8, new equipamentos.turbo(100)));
        }
    }
    veiculos.carroesportivo = carroesportivo;
    class carroPopular extends carro {
        constructor(nome, cor) {
            super(nome, cor, new equipamentos.motor(200, 5));
        }
    }
    veiculos.carroPopular = carroPopular;
})(veiculos || (veiculos = {}));
var equipamentos;
(function (equipamentos) {
    class motor {
        pot;
        ligado;
        cilindros;
        constructor(potencia, cilindros, turbo) {
            this.pot = potencia + (turbo ? turbo.potencia : 0);
            this.cilindros = cilindros;
            this.ligado = false;
        }
        set liga(v) {
            this.ligado = v;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    equipamentos.motor = motor;
    class turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    equipamentos.turbo = turbo;
})(equipamentos || (equipamentos = {}));
const carro1 = new veiculos.carroesportivo("Ford-GT", 1);
const carro2 = new veiculos.carroPopular("Ferrari Califórnia", 3);
carro1.ligar();
carro2.ligar();
carro1.desligar();
console.log(`Nome do carro: ${carro1.meu_nome}`);
console.log(`Cor: ${carro1.minha_cor}`);
console.log(`Potência: ${carro1.potencia}`);
console.log(`Ligado: ${carro1.estou_ligado}`);
console.log("___________________________________");
console.log(`Nome do carro: ${carro2.meu_nome}`);
console.log(`Cor: ${carro2.minha_cor}`);
console.log(`Potência: ${carro2.potencia}`);
console.log(`Ligado: ${carro2.estou_ligado}`);
