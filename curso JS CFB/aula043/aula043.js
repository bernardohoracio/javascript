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

const criarNovoCurso= (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el,chave)=>{
    
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado = ()=>{
    const todosRadio = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado=todosRadio.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso Selcionado: ${cursoSelecionado}`)
    }else{
        alert('TEXTO INDEFINIDO. Selecione algum curso.')
    }
    
})

btnRemoverCurso.addEventListener('click',(evt)=>{
    const rs = radioSelecionado()
    if(rs!=undefined){
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    } else {
        alert('CURSO INDEFINIDO. Selecione algum curso.')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',()=>{
    const rs = radioSelecionado()
    if(rs!=undefined){
        if (nomeCurso.value!=''){
            const cursoSelecionado = rs.parentNode.parentNode
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
     const rs = radioSelecionado()
     
    if (rs!=undefined) {
        if(nomeCurso.value!=''){
            const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else {
             alert('Escreva aulgum curso acima, para que possa adicionar')
        }
        
    }else{
        alert('TEXTO INDEFINIDO. Selecione algum curso.')
        }
})