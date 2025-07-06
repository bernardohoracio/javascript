const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const btn = document.getElementById('btn_copiar')
const voltar = document.getElementById('btn_voltar')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('destaque') 
    })
})

btn.addEventListener('click',()=>{
    const selecionado = [...document.querySelectorAll('.destaque')]
    selecionado.map((el)=>{
        caixa2.appendChild(el)
    })

})

voltar.addEventListener('click', ()=>{
    const selecionado1 = [...document.querySelectorAll('.destaque')]
    selecionado1.map((ele)=>{
        caixa1.appendChild(ele)
    })
})
