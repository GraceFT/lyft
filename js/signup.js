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
 return Math.random() * ((max - min) + min)  
}
function toDoAnAlert(){
    if(numberLong()==true){
       var code ="LAB-";
        var number = getRandomArbitrary(100,900);
        var completeCode= code + Math.floor(number);
        localStorage.setItem('avatarNumb',completeCode);
        alert("Your code: " + completeCode);
        console.log(btn-next.href)
    }else{
    } 
}
function numberLong(){
    var userNumber = document.getElementById("user-number");
    if(userNumber.value.length==0){
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your phone number</span>'
    }else{
        if(userNumber.value.length > 9){
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Put a number less than 9 digits</span>'
        }else{
        avise.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Correct Number</span>'
        return true;
        }
    }
}
function passForm(){
    if(numberLong()==true){
        
    }
}
