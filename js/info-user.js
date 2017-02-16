function validateForm(){
var span= document.getElementById("button-next");
if (validateName()==true && validateLastName()==true && validateEmail()==true){
    var next = document.createElement("a");
    span.appendChild(next);
    }
}
//Uppercase
function upperCaseName(_id){
    var element=document.getElementById(_id);
    element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1); 
}

//validating name
function validateName(){
    var valName = document.getElementById("name").value;
    var validaName= true;
    if (valName!= ""){
        upperCaseName("name"); 
        if(!/([0-9]+)/.test(valName)){
        return true;}
    }
}
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    if (valLastName!= ""){
        upperCaseName("lastname"); 
        if(!/([0-9]+)/.test(valLastName)){
        return true;}    
    }
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("email").value;
    var text=/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if(text.test(valEmail)){
        return true;
    }
}