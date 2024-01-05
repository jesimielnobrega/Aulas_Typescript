"use strict";
class Conta {
    numero;
    titular;
    sdcnt;
    constructor(titular) {
        this.titular = titular;
        this.numero = this.geranum();
        this.sdcnt = 0;
    }
    geranum() {
        const num = Math.floor(Math.random() * 100000);
        return num == 0 ? num + 1 : num;
    }
    info() {
        console.log(`Titular........: ${this.titular}`);
        console.log(`Numero de conta: ${this.numero}`);
        console.log(`Saldo da conta: ${this.sdcnt}`);
    }
    saldo() {
        return this.sdcnt;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        this.sdcnt += valor;
    }
    levantamento(valor) {
        if (valor < 0) {
            console.log("Valor inválido!");
            return;
        }
        if (valor < this.sdcnt)
            this.sdcnt -= valor;
        else
            console.log("Saldo insuficiente");
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Tipo: Pessoa física");
        console.log(`CPF: ${this.cpf}`);
        super.info();
    }
    deposito(valor) {
        if (valor > 500000) {
            console.log("Quantia muito grande para o tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
    levantamento(valor) {
        if (valor > 100000) {
            console.log("Não pode levantar essa quantia!");
        }
        else {
            super.levantamento(valor);
        }
    }
}
class ContaPJ extends Conta {
    NBI;
    constructor(NBI, titular) {
        super(titular);
        this.NBI = NBI;
    }
    info() {
        console.log("Tipo: Pessoa Jurídica");
        console.log(`Número de BI: ${this.NBI}`);
        super.info();
    }
    deposito(valor) {
        if (valor > 1000000) {
            console.log("Quantia muito grande para o tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
    levantamento(valor) {
        if (valor > 500000) {
            console.log("Não pode levantar essa quantia!");
        }
        else {
            super.levantamento(valor);
        }
    }
}
const tt = new ContaPF(19274628263, "Jesimiel");
tt.deposito(20000);
tt.deposito(25000);
tt.levantamento(20000);
tt.info();
