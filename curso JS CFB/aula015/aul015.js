let colocacao = 4

switch (colocacao) {
    case 1:
        console.log('Primeiro lugar')
        break
    case 2:
        console.log('Segundo lugar')
        break
    case 3:
        console.log('terceiro lugar')
        break
    case 4: case 5: case 6:
        console.log('Premio de Participação')
        break
    default:
        console.log('Não subiu ao pódio')
        break
}