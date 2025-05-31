var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você nâo pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('Você pode votar opicionalmente')
} else {
    console.log('Você deve votar obrigatoriamente')
}