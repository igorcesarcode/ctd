const usuario = {
    nome: 'Igor',
    sobreNome: 'Cesar',
    nomeDaAgenda: 'Santander',
    numeroConta: '0000-1',
    saldoConta: 100,
    deposito: function (valorDeposito) {
        this.saldoConta = this.saldoConta + valorDeposito
        return `Deposito no valor de ${valorDeposito} realizado com sucesso.\n 
                Valor Atual:${this.saldoConta}`
    },
    saque: function (valorSaque) {
        if (this.saldoConta >= valorSaque) {
            this.saldoConta = this.saldoConta - valorSaque
            return `Saque no valor ${valorSaque} realizado. saldo atual:${this.saldoConta}`
        } else {
            return `Saque de ${valorSaque} não realizado, saldo atual:${this.saldoConta}`
        }
    },
    nomeCompleto: function () {
        return this.nome + " " + this.sobreNome
    }
}

console.log(usuario.nomeCompleto())
console.log(usuario.numeroConta)
console.log(usuario.nomeDaAgenda)
console.log(usuario.deposito(100))
console.log(usuario.saque(300))
console.log(usuario.saque(200))
console.log( JSON.stringify(usuario))
/*
         Atividade I: Crie um Objeto Literal
         Vamos simular informações gerais de uma conta bancária.
         Para isso deve-se basear nos seguintes recursos:
         (  ) Nome completo do usuário.
         (  ) Número da Agência.
         (  ) Número da Conta.
         (  ) Saldo Atual.
         (  ) Depósito.
         (  ) Saque.
     */

/*
    Atividade II: Adicione funcionalidades ao Objeto Literal.
    (  ) O usuário deve ser capaz de visualizar seu Saldo Atual.
    (  ) O usuário deve ser capaz de Depositar. Após o depósito o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário deve ser capaz de Sacar. Após o saque o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário não pode ser capaz de sacar mais do que possui de Saldo. se não possui saldo o sistema deve responder uma mensagem de erro.
    Sujestões de mensagem:
    - Agora seu Saldo Atual é de R$ X.
    - Você realizou um saque de R$ X. Agora seu Saldo Atual é de R$ X.
    - Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.
*/

/*
    Atividade III: Converta os valores em texto JSON
    (  ) Converta o resultado o objeto literal em JSON.
*/



