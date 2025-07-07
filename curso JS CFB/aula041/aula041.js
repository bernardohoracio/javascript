const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=['HTML','CSS','JavaScrpit','PHP','React','MySQL', 'RectNative']

cursos.map((el,chave)=>{
    const  novoElemento=document.createElement('div')
    novoElemento.innerHTML=el
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=el

    const btn_lixeira=document.createElement('img')
    btn_lixeira.setAttribute('src','.download.png')
    btn_lixeira.setAttribute('class','lixeira')
    

    btn_lixeira.addEventListener('click',(evt)=>{
        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(novoElemento)
    novoElemento.appendChild(btn_lixeira)
})
