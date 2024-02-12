let btnIcon = document.querySelector(".navbarRes_icon")
let icon = document.querySelector(".fa")
let menu = document.querySelector(".navbarRes_items_menu")

function showMenuHandler (){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
    }else{
        menu.classList.add("showMenu")
        icon.classList.add("fa-times")
    }
}


btnIcon.addEventListener('click' , showMenuHandler)


export default showMenuHandler