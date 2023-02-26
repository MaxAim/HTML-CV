//Causa la animacion de porcentajes cargando, elimina la imagen de cargado
//y cambia la opacidad del resto de la pagina para hacerla visible al
//completar el cargado de la pagina

function load(){
    const percentages = document.getElementsByClassName("percentages");
    for (let element of percentages) {
        var count = parseInt(element.children[0].innerHTML);
        for (let i = 0; i <= count; i++) {
            setTimeout(() => { element.children[0].innerHTML = `${i}%`, element.children[0].style.maxWidth = element.children[0].innerHTML}, i * i / 4);
        }
    };
    for(let i of document.getElementsByClassName("colapsable")){
        i.style.maxHeight = i.scrollHeight + "px";
    }
    document.querySelector("body").style.opacity = 1;
    document.querySelector("html").style.background = "none";
}

//Carga la informacion del CV desde un JSON y llama la funcion load

function getData() {
    fetch('../json/info.json')
    .then(res => res.json())
    .then(data => {
        for(let i in data) {
            try {
                let element = document.getElementById(i + "Text");
                element.innerHTML += data[i];
            } catch (error) {
                console.log(error);
            }
        }
        var toLoad = document.getElementsByClassName("toLoad");
        var n = 0;
        while(toLoad[n] != undefined){
            if(!toLoad[n].textContent || toLoad[n].textContent == " "){
                toLoad[n].innerHTML += "Error"
            }
            n++
        }
        load();
    })
}

//Esconde y revela los objetos ocultables

function full(group){
    for(let i of document.getElementsByClassName(`colapsable ${group}`)){
        if(i.style.maxHeight){
            i.style.maxHeight = null;
            i.style.marginBottom = group == "aside" ? "-20px": "-50px";
            i.style.opacity = 0;
            document.getElementsByClassName(`button ${group}`)[0].style.transform = "rotate(180deg)";
        } 
        else{
            i.style.marginBottom = null;
            i.style.opacity = 1;
            i.style.maxHeight = i.scrollHeight + "px";
            document.getElementsByClassName(`button ${group}`)[0].style.transform = null;
        } 
    }
}


//Revela y esconde la barra de navegacion en modo mobile

function hide(event){
    const navBar = document.querySelector("nav");
    const body = document.querySelector("body");
    if(event.target.tagName == "A") return;
    else if(navBar.style.right && event.target != navBar){
        navBar.style.right = null;
        body.style.overflowY = "scroll";
    }
    else if(event.target == document.querySelector("#menu")){
        body.style.overflowY = "hidden";
        navBar.style.right = 0;
    }
}

document.addEventListener("touchstart", hide);