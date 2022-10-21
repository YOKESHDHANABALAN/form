function vfun3(){
    var nickname=document.forms["myform3"]["nickname"].value;
    var contact=document.forms["myform3"]["contact"].value;
    var uaddress=document.forms["myform3"]["uaddress"].value;
    var umonth=document.forms["myform3"]["umonth"].value;
    var uday=document.forms["myform3"]["uday"].value;
    var uyear=document.forms["myform3"]["uyear"].value;

if(nickname==null || nickname=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the nick name";
         return false;
}

if(contact==null || contact=="" ){
    document.getElementById("errorBox").innerHTML =
     "enter the contact number";
   return false;
}

if(uaddress==null || uaddress=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the address";
         return false;
}

if(umonth==null || umonth==""){
          document.getElementById("errorBox").innerHTML =
           "select the month";
         return false;
}

if(uday==null || uday=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the day";
         return false;
}

if(uyear==null || uyear==""){
          document.getElementById("errorBox").innerHTML =
           "enter the year";
         return false;}

if (nickname != '' && contact != '' && uaddress != '' && umonth != '' && uday != '' && uyear != '')


  alert("updated successfull");
                 

}