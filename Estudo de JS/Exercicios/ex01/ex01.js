function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    /*
    var horaEsc = window.document.getElementById("txtHoraEscolhida")
    var horaEscolhida = Number(horaEsc.value)

    msg.innerHTML = `Você carregou esta página às ${hora}:${minuto} horas`

    if(horaEscolhida >= 0 && horaEscolhida < 24){
        var hora = horaEscolhida
    }
*/
    msg.innerHTML = `Você carregou esta página às ${hora}:${minuto} horas`

    if(hora >= 0 && hora < 6){
        msg.innerHTML = `Você carregou esta página às ${hora}:${minuto} horas. Está de madrugada. Vá dormir`
        img.src = "fotos/noite.jpg"
        document.body.style.background = "#73686c"
    } else if(hora < 12){
        img.src = "fotos/manha.jpg"
        document.body.style.background = '#ecd0ba'
    } else if (hora < 18) {
        img.src = "fotos/tarde.jpg"
        document.body.style.background = "#f46d02"
    }else{
        img.src = "fotos/noite.jpg"
        document.body.style.background = "#73686c"
    }
}

function clicar(){
    var horaEsc = window.document.getElementById("txtHoraEscolhida")
    var horaEscolhida = Number(horaEsc.value)

    if(horaEscolhida >= 0 && horaEscolhida < 24){
        var hora = horaEscolhida
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var minuto = data.getMinutes()

        msg.innerHTML = `Você atualizou esta página às ${hora}:${minuto} horas`

    if(hora >= 0 && hora < 6){
        msg.innerHTML = `Você atualizou esta página às ${hora}:${minuto} horas. Está de madrugada. Vá dormir`
        img.src = "fotos/noite.jpg"
        document.body.style.background = "#73686c"
    } else if(hora < 12){
        img.src = "fotos/manha.jpg"
        document.body.style.background = '#ecd0ba'
    } else if (hora < 18) {
        img.src = "fotos/tarde.jpg"
        document.body.style.background = "#f46d02"
    }else{
        img.src = "fotos/noite.jpg"
        document.body.style.background = "#73686c"
    }
    }else{
        window.alert("Hora inválida")
    }

}