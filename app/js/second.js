$(document).ready(function(){

 var login = document.getElementById('login');
 var password = document.getElementById('pswd');
  

 $('#login').ready(function(){
      var valueL = login.value;
    if(!valueL) 
        {loginOn();}
    else if (valueL) 
        {loginOff();}
       
 });

$('#login').keyup(function(){
      var valueL = login.value;
    if(!valueL) loginOn();
    else loginOff();
       
 });

 $('#pswd').ready(function(){
      var valueP = password.value;
    if(!valueP) 
        {passwordOn();}
    else if (valueP) 
        {passwordOff();}
       
 });


$('#pswd').keyup(function(){
      var valueP = password.value;
    if(!valueP) 
        {passwordOn();}
    else if (valueP) 
        {passwordOff();}
       
 });



 function loginOn() {          

 $('#login').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите логин'
    },
    style: {
        classes: 'qtip-blue qtip-shadow'
    },

    show: {
        ready: true
    },

    hide: {
        event: false
        
    },

    position: {
        my: 'right center',
        at: 'left center'
    },
    style: {
        classes: 'qtip-blue qtip-shadow'
    }

});}

 function loginOff() {
     $('#login').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите логин'
    },
    style: {
        classes: 'qtip-blue qtip-shadow'
    },

    show: {
        event: false
    },

    hide: {
        event: true
    },

    position: {
        my: 'right center',
        at: 'left center'
    },
    style: {
        classes: 'qtip-blue qtip-shadow'
    }

});

     }
  
               
  function passwordOn() {          

 $('#pswd').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите пароль'
    },

    show: {
        ready: true
    },

    hide: {
        event: false
        
    }

});}

 function passwordOff() {
     $('#pswd').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите пароль'
    },

    show: {
        event: false
    },

    hide: {
        event: true
    }

});

     }       

});