function load(){
    const percentages = document.getElementsByClassName("percentages");
    for (let element of percentages) {
        element.children[0].style.maxWidth = element.children[0].innerHTML;
    };
}