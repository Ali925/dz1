$(document).ready(function(){

 var login = document.getElementById('login');
 var password = document.getElementById('pswd');
  
loginOn();
passwordOn();


$('#login').keyup(function(){
      var valueL = login.value;
    if(!valueL) loginOn();
    else loginOff();
       
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
        classes: 'qtip-red log-custom-tip'
    }

}); 

 $('#login').addClass('input-error');
}

 function loginOff() {
     $('#login').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите логин'
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
        classes: 'qtip-red log-custom-tip'
    }

}); 

    $('#login').removeClass('input-error');
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
        
    },

    position: {
        my: 'right center',
        at: 'left center'
    },

    style: {
        classes: 'qtip-red psw-custom-tip'    
      }

});

 $('#pswd').addClass('input-error');
}

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
    },

    position: {
        my: 'right center',
        at: 'left center'
    },
    
    style: {
        classes: 'qtip-red psw-custom-tip'
         }

});

   $('#pswd').removeClass('input-error');
   

     }       

});