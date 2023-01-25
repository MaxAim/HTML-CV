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
}

function full(group){
    for(let i of document.getElementsByClassName(`colapsable ${group}`)){
        if(i.style.maxHeight){
            i.style.maxHeight = null;
            i.style.opacity = 0;
            document.getElementsByClassName(`button ${group}`)[0].style.transform = "rotate(180deg)";
        } 
        else{
            i.style.opacity = 1;
            i.style.maxHeight = i.scrollHeight + "px";
            document.getElementsByClassName(`button ${group}`)[0].style.transform = null;
        } 
    }
}

var ns;

function hide(event){
    const navBar = document.querySelector("nav");
    ns = event.target
    if(event.target.tagName == "A"){
        console.log(ns)
    }
    else if(navBar.style.right && event.target != navBar){
        navBar.style.right = null;
    }
    else if(event.target == document.querySelector("#menu")){
        navBar.style.right = 0;
    }
}

function test(event){
    console.log(event)
}

document.addEventListener("touchstart", hide);
document.addEventListener("select", test)