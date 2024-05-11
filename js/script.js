const openSideMenu = () => {
    const barraLateral = document.querySelector('.side-menu')
    const actualDisplay = barraLateral.style.display
    if(actualDisplay == 'block'){
        barraLateral.style.display = "none"
    }
    else{
        barraLateral.style.display = "block"
    }
    

}

window.onclick = function (event) {
    const barraLateral = document.querySelector('.side-menu')
    if (event.target == barraLateral){
        openSideMenu()
    }
}