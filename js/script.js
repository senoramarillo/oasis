$(document).ready(function(){


		$('#form').validate({
	    rules: {
	       name: {
	        required: true,
			minlength: 5
	      },

		  
	      email: {
	        required: true,
	        email: true
	      },

	      telephone: {
	      	required: false,
	      },
		  
	     
		   message: {
	      	minlength: 10,
	        required: true
	      },
		  
		  agree: "required"
		  
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready