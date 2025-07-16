const caixaCursos = document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes=document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois=document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso=document.getElementById('nomeCurso')

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso= (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    return novoElemento
}

cursos.map((el,chave)=>{
    
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    try{
        alert(`Curso Selcionado: ${cursoSelecionado().innerHTML}`)
    }catch(ex){
        alert('TEXTO INDEFINIDO. Selecione algum curso.')
    }
    
})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const cs = cursoSelecionado()
    if(cs!=undefined){
    cs.remove()
    } else {
        alert('CURSO INDEFINIDO. Selecione algum curso.')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',()=>{
    const cs = cursoSelecionado()
    if(cs!=undefined){
        if (nomeCurso.value!=''){
            const cursoSelecionado = cs
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        } else {
             alert('Escreva aulgum curso acima, para q possa adicionar')
        }
        
    }else{
        alert('TEXTO INDEFINIDO. Selecione algum curso.')
    }

})
btnAdicionarNovoCursoDepois.addEventListener('click',()=>{
    const cs = cursoSelecionado()
     
    if (cs!=undefined) {
        if(nomeCurso.value!=''){
            const cursoSelecionado = cs
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else {
             alert('Escreva aulgum curso acima, para que possa adicionar')
        }
        
    }else{
        alert('TEXTO INDEFINIDO. Selecione algum curso.')
        }
})