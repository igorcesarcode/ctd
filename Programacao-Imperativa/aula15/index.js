fs = require('fs');

var usuarios = []

function criarUsuario(nomeUsuario,anoUsuario){
  this.nome = nomeUsuario,
  this.ano = anoUsuario
}


function salvarDados(obj){
  const json = JSON.stringify(obj);
  fs.writeFile('./banco.json',json, function(err){
    if (err){
      return console.log(err);
    }
    console.log('Arquivo criado')
  })
}

function lerDados(){
  const dadosOBJ = JSON.parse(fs.readFileSync('./banco.json', 'utf8'));
  return dadosOBJ
}

//usuarios.push(new criarUsuario('igor','23'))
//usuarios.push(new criarUsuario('bia','25'))
//salvarDados(usuarios)
//console.log(lerDados())

