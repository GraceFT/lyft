function validateForm(){
    if (validateName()==true && validateLastName()==true){
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Validate name and lastname</span>';
        var next= document.getElementById("btn_next");
        next.href="app.html";
    }else{
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>';
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
        return true;
        localStorage.setItem("name",valName);
        }
    }
}
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    if (valLastName!= ""){
        upperCaseName("lastname"); 
        if(!/([0-9]+)/.test(valLastName)){
        localStorage.setItem("lastname",valLastName);
        return true;}    
    }
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("email").value;
    var text=/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if(text.test(valEmail)){
    localStorage.setItem("email",val)
        return true;
    }
}