const notas = [3,8,5,9,6,10]

const mediaNota = notas.every((valor)=>valor < 6)


if (mediaNota){
        console.log(`grupo reprovado`)
} else {
        console.log('grupo aprovado')
    }