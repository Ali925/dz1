$(document).ready(function(){

 var name = document.getElementById('name');
 var email = document.getElementById('email');
  var about = document.getElementById('msg');
  
$('#form').on('submit', function(e){
    e.preventDefault();

      var valueN = name.value;
    if(!valueN || valueN==='Как к Вам обращаться') 
      {nameOn();}
    else 
      {nameOff();}

     var valueE = email.value;
    if(!valueE || valueE==='Куда мне писать') 
        {emailOn();}
    else 
        {emailOff();}

        var valueA = about.value;
    if(!valueA || valueA==='Кратко в чем суть') 
      {aboutOn();}
    else 
      {aboutOff();}
})

$('.reset-btn').click(function(){

    nameOff();
    emailOff();
    aboutOff();
    recapOff();
})

$('#name').keyup(function(){
      var valueN = name.value;
    if(!valueN) 
      {nameOn();}
    else 
      {nameOff();}
       
 });

$('#email').keyup(function(){
      var valueE = email.value;
    if(!valueE) 
        {emailOn();}
    else 
        {emailOff();}
       
 });

$('#msg').keyup(function(){
      var valueA = about.value;
    if(!valueA) 
      {aboutOn();}
    else 
      {aboutOff();}
       
 });


 function nameOn() {          

 $('#name').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Вы не ввели имя'
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
        classes: 'qtip-red name-custom-tip'
    }

}); 

 $('#name').addClass('input-error');
}

 function nameOff() {
     $('#name').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Вы не ввели имя'
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
        classes: 'qtip-red name-custom-tip'
    }

}); 

    $('#name').removeClass('input-error');
}
  
               
  function emailOn() {          

 $('#email').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Вы не ввели email'
    },

    show: {
        ready: true
    },

    hide: {
        event: false
        
    },

    position: {
        my: 'left center',
        at: 'right center'
    },

    style: {
        classes: 'qtip-red email-custom-tip'    
      }

});

 $('#email').addClass('input-error');
}

 function emailOff() {
     $('#email').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Вы не ввели email'
    },

    show: {
        event: false
    },

    hide: {
        event: true
    },

    position: {
        my: 'left center',
        at: 'right center'
    },
    
    style: {
        classes: 'qtip-red email-custom-tip'
         }

});

   $('#email').removeClass('input-error');
   

     }       
  function aboutOn() {          

 $('#msg').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Ваш вопрос'
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
        classes: 'qtip-red about-custom-tip'    
      }

});

 $('#msg').addClass('input-error');
}

 function aboutOff() {
     $('#msg').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'Ваш вопрос'
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
        classes: 'qtip-red about-custom-tip'
         }

});

   $('#msg').removeClass('input-error');
   

     }  


});