function verificar(){
   let data = new Date()
   let anoAtual = data.getFullYear()
   let inputAnoNascimento = document.querySelector('#inputAnoNascimento')
   let divResultado = document.querySelector('#divResultado')

   if(Number(inputAnoNascimento.value) <= 0 || Number(inputAnoNascimento.value) > anoAtual){
    
    alert('[ERROR] digite um ano valido')

    }else{
    
        let idade = anoAtual - Number(inputAnoNascimento.value)
        let genero = ''
        let inputSexoMasculino = document.querySelector('#inputMasculino')
        //criando uma imagem dinamicamente através do javascript
        let img = document.createElement('img')
        img.setAttribute('id','foto')


        if(inputSexoMasculino.checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','/imagens/homem/criança.jpeg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','/imagens/homem/jovem.jpeg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','/imagens/homem/adulto.jpeg')
            }else{
                //idoso
                img.setAttribute('src','/imagens/homem/idoso.jpeg')
            }
            
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/mulher/criança.jpeg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','/imagens/mulher/jovem.jpeg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','/imagens/mulher/adulto.jpeg')
            }else{
                //idoso
                img.setAttribute('src','/imagens/mulher/idosa.jpeg')
            }
        }
        divResultado.innerHTML = `Sua idade é: ${idade} anos<br>  `
        
        divResultado.appendChild(img)        
        
    }
   
}
