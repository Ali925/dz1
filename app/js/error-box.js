var Popups = (function(){

	var _privateProperty = false;

	var _renderPopup = function() {
      $('.support-box').before('<div class="error-box"></div>');
	}
  
    return {

        init: function(){
           
            var _this = this;

          _renderPopup();

          $('.reset-btn').click(function(){
              _this.popupClose();
          });


        },

    	popupOpen : function(name){
    		$('.error-box').append('<div class="error-content">'+name+'</div>');
        $('.error-box').removeClass('accept-box');
        $('.error-close').removeClass('accept-close');
    	},

      popupAccept : function(name){
        $('.error-box').append('<div class="error-content">'+name+'</div>');
        $('.error-box').addClass('accept-box');
        $('.error-close').addClass('accept-close');
      },

      popupClean : function(){
         $('.error-box').text('');
          $('.error-box').append('<div class="error-close"></div>');
          $('.error-close').click(function(){
              Popups.popupClose();
          });
      },

    	popupClose : function(){
          $('.error-box').remove();
          Popups.key = false;
    	},

    	key: false
    }

   

}()); 

$(document).ready(function(){


});
