const caixa = document.querySelector('#caixa')
const curso = ['HTML', 'JS', 'PHP', 'React']


curso.map((el,chave)=>{
    const novo= document.createElement('div')
    novo.innerHTML=el
    novo.setAttribute('id', 'c'+chave)
    novo.setAttribute('class','curso c1')
    novo.innerHTML=el
    caixa.appendChild(novo)

    novo.addEventListener('click', (evt)=>{
        console.log(evt.target)
        caixa.removeChild(evt.target)
    })
})

