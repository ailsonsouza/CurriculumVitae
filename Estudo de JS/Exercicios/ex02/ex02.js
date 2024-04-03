function verificar(){
    var data = new Date() //captura a data/hora do computador
    var ano = data.getFullYear() //captura o ano do item acima
    var fano = document.getElementById('txtano') //cria a variável que captura o conteúdo da Id txtano
    var res = document.querySelector('div#res') //cria a variável que captura o conteúdo da Id res

    if (fano.value.length == 0 || Number(fano.value) > ano){ //Um mini validade da resposta
        window.alert('[ERRO] Verifique os dados e tente novamente ') 
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada`
        var genero = ''

        var img = document.createElement('img') // Incluindo o elemento imagem com JS
        img.setAttribute('id', 'foto') //incluindo um id="foto" no elemento img

        if (fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'Fotos/foto-crianca-m.jpg')
            }else if (idade < 18){
                //jovem
                img.setAttribute('src', 'Fotos/foto-jovem-m.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', "Fotos/foto-adulto-m.jpg")
            }else{
                //Idoso
                img.setAttribute('src', 'Fotos/foto-idoso-m.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'Fotos/foto-crianca-f.jpg')
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'Fotos/foto-jovem-f.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'Fotos/foto-adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'Fotos/foto-idoso-f.jpg')
            }
            

        }

        res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)  //inclui a imagem na tela


    }

}