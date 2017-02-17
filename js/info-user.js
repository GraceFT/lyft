function validateForm(){
    if (validateName()==true && validateLastName()==true){
        avise.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Validate name and lastname</span>';
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
    var isName = true;
    if (valName!= ""){
        upperCaseName("name");
        return isName = true;
        if(/([0-9]+)/.test(valName)){
        return isName = false;
        }else{
        return isName = true;    
        }
    }
}
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    var isLastName=true;
    if (valLastName!= ""){
        upperCaseName("lastname");
        return isLastName = true;
        if(/([0-9]+)/.test(valLastName)){
        return isLastName = false;
        }else{
        return isLastName = true;    
    }
}
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("input-email").value;
    var isEmail=true;
    if(!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(valEmail)){
    return isEmail=false;
    }else{
        emailadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
        return isEmail=true;
    }  
}