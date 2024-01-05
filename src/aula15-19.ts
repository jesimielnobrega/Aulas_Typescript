class Computador {
  public nome: string;
  private vel: number;
  private geracao: number;
  constructor(nome: string, vel: number, geracao: number) {
    this.nome = nome;
    this.vel = vel;
    this.geracao = geracao;
    console.log("Computador criado!");
  }

  info(): void {
    console.log("____________________________");
    console.log(`Nome......: ${this.nome}`);
    console.log(`Velocidade: ${this.vel}`);
    console.log(`Geração...: ${this.geracao}`);
  }

  change_vel(vel:number):void{
    if (vel>=0 && vel <=1000){
        this.vel=vel
    }
    else{
        console.log(`Não aceitamos ${vel} como valor da velocidade!`)
    }
  }
}

const c1 = new Computador("Jesy-Pc", 12, 11);
const c2 = new Computador("Mana-Pc", 16, 10);
const c3 = new Computador("Assu-Pc", 8, 13);

c1.change_vel(300);
c1.info();
c2.info();
c3.info();
