function init(){
    var lista= document.getElementById("lista-countries");
    var links= lista.getElementsByTagName("a");
    
    for (var i=0; i<links.length;i++){
        links[i].addEventListener("click",onLinkClick);
    }
    
}
Function onLinkClick(){
    for (var i=0; i<jsoncountry.length;i++){
        links[i].addEventListener("click",onLinkClick);
    }
}