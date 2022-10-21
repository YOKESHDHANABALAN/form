function vfun1(){
    var fname=document.forms["myform2"]["fname"].value;
    var lname=document.forms["myform2"]["lname"].value;
    var uname=document.forms["myform2"]["uname"].value;
    var email=document.forms["myform2"]["email"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;

if(fname==null || fname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the First name";
         return false;
}

if(lname==null || lname=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the last name";
   return false;
}

if(uname==null || uname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(email==null || email==""){
          document.getElementById("errorBox").innerHTML =
           "enter the email";
         return false;
}

if(upswd1==null || upswd1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if(upswd2==null || upswd2==""){
          document.getElementById("errorBox").innerHTML =
           "enter the re-confirm password";
         return false;}

 if(upswd != upswd){
          document.getElementById("errorBox").innerHTML =
           "password dont match";
         return false;}



if (fname != '' && lname != '' && uname != '' && upswd1 != '' && upswd2 != '' && email != '' && upswd1 == upswd2)


  alert("Register successfull");
                 

}