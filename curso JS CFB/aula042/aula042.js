const M18=(valor)=>{
    if(valor >= 18)
    return valor
}


const idades = [15,21,30,17,18,44,12,50]
const maior = idades.filter((val)=>{
    if(val >= 18)
    return val
})

const menor = idades.filter((val)=>{
    if(val < 18)
    return val
})

// const M18=(valor,indice,arr)=>{


console.log(idades)
console.log(maior)
console.log(menor)

