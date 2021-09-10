     /*
            Com base na lista alunos e suas respectivas notas...

            Atividade I: Liste todos os valores
            Lista todos os valores da lista.

            Atividade II: Calcule a média de todos os valores
            Calcule a média de todos as notas da lista.

            Atividade III: Filtre e liste valores
            Filtre e liste todos os alunos que zeraram em uma ou mais provas.

            Atividade IV: Busque e liste valores
            Filtre todos os alunos, cuja a média foi inferior a 6.

            Atividade V: Busque por caracteres
            Busque e liste todos os alunos que possuam caracteres 'io'.

        */

            var listaDeAlunos = [
                {
                    nome: 'Ivan',
                    notas: [10, 8.1, 6.6, 7],
                },
                {
                    nome: 'Salomão',
                    notas: [5, 6.3, 6.8, 10]
                },
                {
                    nome: 'Angela',
                    notas: [9, 9.6, 7.9, 8]
                },
                {
                    nome: 'Ivo',
                    notas: [6, 6, 3, 6.5]
                },
                {
                    nome: 'Dayane',
                    notas: [3, 6, 7.5, 8.1]
                },
                {
                    nome: 'Willian',
                    notas: [3, 2, 5, 7.3]
                },
                {
                    nome: 'Ana',
                    notas: [5, 4, 6, 3.5]
                },
                {
                    nome: 'Edu',
                    notas: [6, 3, 6, 6]
                }, 
                {
                    nome: 'Paulo',
                    notas: [10, 9.3, 9, 0]
                },
                {
                    nome: 'Junior',
                    notas: [7, 6.5, 7, 6.3]
                },
                {
                    nome: 'Caio',
                    notas: [7, 0, 7.5, 8]
                }
            ];
    
            /*
                Documentação dos recursos abordado em aula:
                * map() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
                * filter() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                * reduce() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
                * every() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
                * some() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
                * find() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
                
                Documentação de recursos extra:
                * String
                https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
                https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods
                
            */
                
    
const atividade1 = listaDeAlunos.map(f =>f.notas)
const atividade2 = listaDeAlunos.map(f=>f.notas.reduce((total, numero) => total + numero, 0)).reduce((total, numero) => total + numero, 0).toFixed(2)

const atividade3 = listaDeAlunos.map((f)=>{
                    
    if(f.notas.some(l => l === 0)){
        return `${f.nome} tirou nota 0`
    }
    
}).filter(e => e != undefined)

const atividade4 = listaDeAlunos.map((f)=>{
                    
    if(f.notas.some(l => l > 0)){
        return `${f.nome} tirou nota maior que 6`
    }
    
}).filter(e => e != undefined)

const atividade5 = listaDeAlunos.filter(f => f.nome.includes('io') ).map(f => f.nome)


console.log("Atividade 1\n",atividade1)
console.log("Atividade 2\n",atividade2)
console.log("Atividade 3\n",atividade3)
console.log("Atividade 4\n",atividade4)
console.log("Atividade 5\n",atividade5)