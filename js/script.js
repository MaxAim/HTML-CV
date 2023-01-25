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

function minimize(){
    for(let i of document.getElementsByClassName("percentages")){
        i.children[0].classList.remove("full")
        i.children[0].classList.add("mini");
    }
}

function full(group){
    for(let i of document.getElementsByClassName(`colapsable ${group}`)){
        if (i.style.maxHeight){
            i.style.maxHeight = null;
            i.style.opacity = 0;
            document.getElementsByClassName(`button ${group}`)[0].style.transform = "rotate(180deg)";
            
        } 
        else {
            i.style.opacity = 1;
            i.style.maxHeight = i.scrollHeight + "px";
            document.getElementsByClassName(`button ${group}`)[0].style.transform = null;
        } 
    }
}