const openSideMenu = () => {
    const barraLateral = document.querySelector('.side-menu')
    const actualDisplay = barraLateral.style.display
    const hamburguer = document.querySelector(".hamburguer")
    const body = document.querySelector("body")
    const bkgSideMenu = document.querySelector('.bkg-side-menu')


    if(actualDisplay == 'block'){
        barraLateral.style.display = "none"
        bkgSideMenu.style.display = "none"
        hamburguer.src = "img/hamburguer-img2.png"
        body.style.backgroundColor = "#fff"
    }
    else{
        barraLateral.style.display = "block"
        bkgSideMenu.style.display = "block"
        hamburguer.src = "img/close-side-bar.png"
    }


}

