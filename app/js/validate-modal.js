$(document).ready(function(){
  $('#open-modal').click(function(){
 var name = document.getElementById('work-name');
 var image = document.getElementById('work-pic');
 var url = document.getElementById('work-url');
 var about = document.getElementById('work-about');

$('#upload-img').load(function(){
setTimeout(function(){
                nameOn();
                imageOn();
                 urlOn();
                aboutOn();
            }, 1000);

});

$('#close-btn').click(function(){
    nameOff();
    imageOff();
    urlOff();
    aboutOff();
});

$('#work-name').keyup(function(){
      var valueN = name.value;
      
    if(!valueN) 
      {nameOn();}
    else 
      {nameOff();}
       
 });

if ($.browser.msie) {
$('#work-pic').click(function(){
  this.blur();
  this.focus();
       
 });
}


$('#work-pic').change(function(){
  var valueP = image.value;
    if(!valueP) 
        {imageOn();}
    else
        {imageOff();
         $('#work-img').text(valueP);
        } 

});


$('#work-url').keyup(function(){
      var valueU = url.value;
    if(!valueU) 
      {urlOn();}
    else 
      {urlOff();}
       
 });



$('#work-about').keyup(function(){
      var valueA = about.value;
    if(!valueA) 
        {aboutOn();}
    else 
        {aboutOff();}
       
 });
});
 
 function nameOn() {          

 $('#work-name').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите название'
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

 $('#work-name').addClass('input-error');
}

 function nameOff() {
     $('#work-name').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'введите название'
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

    $('#work-name').removeClass('input-error');
}
  
               
  function imageOn() {          

 $('#work-img').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'изображение'
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
        classes: 'qtip-red img-custom-tip'    
      }

});

 $('#work-img').addClass('input-error');
}

 function imageOff() {
     $('#work-img').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'изображение'
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
        classes: 'qtip-red img-custom-tip'
         }

});

   $('#work-img').removeClass('input-error');

 }       

 function urlOn() {          

 $('#work-url').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'ссылка на проект'
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
        classes: 'qtip-red url-custom-tip'
    }

}); 

 $('#work-url').addClass('input-error');
}

 function urlOff() {
     $('#work-url').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'ссылка на проект'
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
        classes: 'qtip-red url-custom-tip'
    }

}); 

    $('#work-url').removeClass('input-error');
}
  
               
  function aboutOn() {          

 $('#work-about').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'описание проекта'
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

 $('#work-about').addClass('input-error');
}

 function aboutOff() {
     $('#work-about').qtip({
      // Simply use an HTML img tag within the HTML string
      content: {

        text: 'описание проекта'
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

   $('#work-about').removeClass('input-error');
   

     }       
  });  