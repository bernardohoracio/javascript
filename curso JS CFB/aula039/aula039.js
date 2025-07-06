const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(btn_c[0].children.length > 0 ? 'Possui filhos' : 'NÃO Possui filhos')

console.log(caixa1.children[1].innerHTML = 'TESTE')