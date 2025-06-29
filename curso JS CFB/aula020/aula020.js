let n = 1
let max = 1000
let pares = 0

for (let i=n; i <= max; i++) {
    console.log ('DFB cursos - ' + i)

    if (i%2 !== 0){
        continue
    }
    pares++
}

console.log('Quantidade de pares: ' + pares)