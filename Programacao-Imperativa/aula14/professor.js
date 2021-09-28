function Professor(valorNome,valorSobreNome,valorNomeDaAgenda,valorNumeroConta) {
  this.nome= valorNome;
  this.sobreNome = valorSobreNome;
  this.nomeDaAgenda = valorNomeDaAgenda;
  this.numeroConta = valorNumeroConta;
  this.saldoConta = 0;
  this.deposito=function(valorDeposito) {
      this.saldoConta = this.saldoConta + valorDeposito
      return `Deposito no valor de ${valorDeposito} realizado com sucesso.\n 
              Valor Atual:${this.saldoConta}`
  };
  this.saque = function(valorSaque) {
      if (this.saldoConta >= valorSaque) {
          this.saldoConta = this.saldoConta - valorSaque
          return `Saque no valor ${valorSaque} realizado. saldo atual:${this.saldoConta}`
      } else {
          return `Saque de ${valorSaque} não realizado, saldo atual:${this.saldoConta}`
      }
  };
  this.nomeCompleto = function() {
      return this.nome + " " + this.sobreNome
  }
}
var Professor2 = new Professor('igor','cesar','santander','0000-1')
console.log(Professor2.deposito(100))
console.log(Professor2.saldoConta)