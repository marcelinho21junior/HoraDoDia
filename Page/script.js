function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = 'rgb(61, 236, 248)'
        document.body.style.color = 'white'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = 'rgb(236, 235, 159)'
        document.card.style.background = 'white'
        document.body.style.color = 'white'
    }else{
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = 'rgb(8, 5, 5)'
        document.body.style.color = 'white'
    }
}