
function validate(){

  
  var email =  document.getElementById("email") ;

  var txtArea =  document.getElementById("texArea") ;

  var $emailErrorMsg = $("#labalEmail") ;

  var $txtAreaErrorMsg = $("#labalTxtArea") ;


  // regx = regular expression

  // var regx = /^ ([a-z A-Z 0-9\.-]+) @ ([a-z A-Z 0-9 -]+) .([a-z]{1,8}) $/ ;

  // example@something.com

  
  //  if(  regx.test(email.value) ){


  //   $emailErrorMsg.html("valid");

  //   $emailErrorMsg.show();
    
 
  //  } else {

  //   $txtAreaErrorMsg.hide();
 
  //   $emailErrorMsg.html("e.g.: example@something.com ");

  //  $emailErrorMsg.show();

  
  //  return false ;

  //  }  /// did  not work 

  if (email.value.trim()==""){

   $txtAreaErrorMsg.hide();

    $emailErrorMsg.text("Email can't be empty");

   $emailErrorMsg.show();

  
   return false ;

  }

  else if (email.value.indexOf(".com") == -1){

    $txtAreaErrorMsg.hide();
 
     $emailErrorMsg.text("Add .com to your email");
 
    $emailErrorMsg.show();
 
   
    return false ;
 
   }

   else if (email.value.length <= 8){

    $txtAreaErrorMsg.hide();
 
     $emailErrorMsg.text("Email have to be More Than 8 Characters");
 
    $emailErrorMsg.show();
 
   
    return false ;
 
   }

  else if (txtArea.value.trim()==""){


    $emailErrorMsg.hide();

    $txtAreaErrorMsg.text("your message can't be empty");

   $txtAreaErrorMsg.show();

    return false ;

  }

  else if (txtArea.value.length <= 20){


    $emailErrorMsg.hide();

    $txtAreaErrorMsg.text("Please Enter More Than 20 Characters");

   $txtAreaErrorMsg.show();

    return false ;
  
  } 

  alert("your message has been sent");
  
  
  return true ; 

}
