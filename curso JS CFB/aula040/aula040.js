const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=['HTML','CSS','JavaScrpit','PHP','React','MySQL', 'RectNative']

cursos.map((el,chave)=>{
    const  novoElemento=document.createElement('div')
    novoElemento.innerHTML=el
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class','curso c1')
    caixa1.appendChild(novoElemento)
})
