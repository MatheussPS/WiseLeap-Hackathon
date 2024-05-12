const openSideMenu = () => {
    const barraLateral = document.querySelector('.side-menu')
    const actualDisplay = barraLateral.style.display
    const hamburguer = document.querySelector(".hamburguer")
    const body = document.querySelector("body")


    if(actualDisplay == 'block'){
        barraLateral.style.display = "none"
        hamburguer.src = "img/hamburguer-img.png"
        body.style.backgroundColor = "#fff"
    }
    else{
        barraLateral.style.display = "block"
        hamburguer.src = "img/close-side-bar.png"
        body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    }


}

