function init(){
    //console.log(init);
    var imgSrc= document.getElementById("flag-country");
    var codePais= document.getElementById("code-country");
    
    var imagesC = localStorage.getItem("cImage");
    var codeC = localStorage.getItem("codesPhone");
    
    imgSrc.src= imagesC;
    codePais.textContent= codeC;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}