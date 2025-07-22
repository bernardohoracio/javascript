const num = [5,10,40,2,5,64]

const resultado = num.reduce((soma,atual)=>{
    if (atual >=10) {
        return soma+atual
    }
    return soma
},0)

console.log(resultado)