const vo=document.querySelector('#vo')
const pai = document.querySelector('.pai')
const f=document.querySelector('.filho')

console.log(f.parentNode)
console.log(f.parentNode.parentNode)

function mudarCor(){
    const pirmao = f.nextElementSibling
    pirmao.style.background = 'red'
}
mudarCor()

f.addEventListener('click',(evt)=>{
    const primeiro=f.parentNode.firstElementChild
    primeiro.innerHTML = 'eu sou o primeiro filho'
})