/*function* perguntas(){
    let nome = yield 'qual seu nome'
    let esportes = yield 'qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esportes}`
}

let itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Bernardo').value)
console.log(itp.next('Basquete').value)
*/

/*
function* contador(){
    let i = 0
    while(true) {
        yield i++
        if (i > 5) 
            break
    }
    
}

const itc = contador()
for (let c of itc) {
    console.log(c)
}
*/

function* NumerosPares(){
    let p = 0
    yield ''
}
