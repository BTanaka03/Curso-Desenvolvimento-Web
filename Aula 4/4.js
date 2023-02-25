const prompt = require('prompt-sync')()

let pessoa = {
  Nome: prompt('Digite o seu nome completo: '),
  CPF: prompt('Informe seu CPF: '),
  email: prompt('Informe seu email: '),
  Endereco: prompt('DIgite seu endereco: '),
}

console.log(pessoa)