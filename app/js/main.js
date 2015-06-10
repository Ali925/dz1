$(document).ready(function(){

$(".work-wrapper").mouseenter( function() {
       	// body...
       $(this).children("div").children("img").css({opacity: "0.2"});
       $(this).children(".work-link").stop(true,true).animate({width:"63px", height:"18px", left:"-18px", borderWidth:"2.5px"});
       $(this).children("div").children("a").stop(true,true).animate({fontSize:"12px"});
});       

$(".work-wrapper").mouseleave( function() {
       	// body...
       $(this).children("div").children("img").css({opacity: "1"});
       $(this).children(".work-link").stop(true,true).animate({width:"0px", height:"0px", left:"10px", borderWidth:"0px"});
       $(this).children("div").children("a").stop(true,true).animate({fontSize:"0px"});
});

$(".work-add-wrapper").mouseenter(function(){
          $(this).children("div").children("img").css({bottom:"0px"});
          $(this).children("div").children("img").animate({bottom:"+=61px"}, "fast");
          $(this).children("div").children("span").css({opacity: "0"});
          $(this).children("div").children("span").animate({opacity: "1"}, "fast");
});


$(".work-add-wrapper").mouseleave(function(){
          
          $(this).children("div").children("img").stop(true, true);
         
});

$(".work-add-link").click(function(){
      
      $.modal("<div class='modal-box'>"
        +"<div class='modal-header'><a href='#' class='close'><img src='image/close.png' alt='close' height='25' width='25'></a><h1 class='modal-header-text'>Добавление проекта</h1>"
        +"<div class='modal-header-foot'></div></div><div class='modal-form-box'><form action='' method='post' enctype='multipart/form-data' class='modal-form'>"
        +"<label class='work-label' for='work-name'>Название проекта</label><input id='work-name' type='text'>"
        +"<label class='work-label' for='work-pic'>Картинка проекта<div class='work-pic-box'><img src='image/upload.png' alt='upload' class='work-png' /></div></label><input id='work-pic' type='file'>"
        +"<label class='work-label' for='work-url'>URL проекта</label><input id='work-url' type='url'>"
        +"<label class='work-label' for='work-about'>Описание</label><textarea id='work-about' cols='30' rows='10'></textarea>"
        +"<input type='submit' value='Добавить' class='modal-sbm'></form></div></div>", {closeClass:'close', overlayCss:{background:'rgb(88,105,122)'}, opacity:80});
  
});


});