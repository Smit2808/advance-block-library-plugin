(function( $ ) {
	'use strict';

	$(document).on('click','.abl-toggle__btn',function(event){

		event.preventDefault();
		const $button = $( event.target );
	
		const data = {
		  action   	: 'abl_activate_deactivate',
		  abl_block : $button.data( 'block-slug' ),
		  nonce    	: abl_params.nonce,
		};

		$.ajax({
		  url	: abl_params.ajaxurl,
		  data	: data,
		  type	: 'POST',
		  beforeSend:function(){
			$button.text("Processing...");
		  },
		  success: function(response){
			if(response.success){
				if(false !== response.data){
					$button.text("Deactivate");
					$button.toggleClass("deactive");
				} else {
					$button.text("Activate");
					$button.toggleClass("deactive");
				}
			} else {
				alert("Something went wrong!!");
			}
		  }
	  });
	});

})( jQuery );
