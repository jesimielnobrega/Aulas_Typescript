class Conta {
  protected numero: number;
  protected titular: string;
  private sdcnt: number;
  constructor(titular: string) {
    this.titular = titular;
    this.numero = this.geranum();
    this.sdcnt = 0;
  }
  private geranum(): number {
    const num = Math.floor(Math.random() * 100000);
    return num == 0 ? num + 1 : num;
  }
  info() {
    console.log(`Titular........: ${this.titular}`);
    console.log(`Numero de conta: ${this.numero}`);
    console.log(`Saldo da conta: ${this.sdcnt}`);
  }
  saldo(): number {
    return this.sdcnt;
  }
  protected deposito(valor: number) {
    if (valor < 0) {
        console.log("Valor inválido!");
        return;
    }
    this.sdcnt += valor;
  }
  protected levantamento(valor: number) {
    if (valor < 0) {
        console.log("Valor inválido!");
        return;
    }
    if(valor<this.sdcnt)
        this.sdcnt -= valor;
    else
        console.log("Saldo insuficiente");
  }
}

class ContaPF extends Conta {
  private cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
  info() {
    console.log("Tipo: Pessoa física");
    console.log(`CPF: ${this.cpf}`);
    super.info();
  }
  deposito(valor: number) {
    if (valor > 500000) {
      console.log("Quantia muito grande para o tipo de conta");
    } else {
      super.deposito(valor);
    }
  }
  levantamento(valor: number) {
    if(valor>100000){
        console.log("Não pode levantar essa quantia!")
    }
    else{
        super.levantamento(valor);
    }
  }
}
class ContaPJ extends Conta {
  private NBI: number;
  constructor(NBI: number, titular: string) {
    super(titular);
    this.NBI = NBI;
  }
  info() {
    console.log("Tipo: Pessoa Jurídica");
    console.log(`Número de BI: ${this.NBI}`);
    super.info();
  }
  deposito(valor: number) {
    if (valor > 1000000) {
      console.log("Quantia muito grande para o tipo de conta");
    } else {
      super.deposito(valor);
    }
  }
  levantamento(valor: number) {
    if(valor>500000){
        console.log("Não pode levantar essa quantia!")
    }
    else{
        super.levantamento(valor);
    }
  }
}

const tt = new ContaPF(19274628263, "Jesimiel");

tt.deposito(20000);
tt.deposito(25000);
tt.levantamento(20000);
tt.info();
