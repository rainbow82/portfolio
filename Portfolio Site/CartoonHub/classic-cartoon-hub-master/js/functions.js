// collapse plug in
$('.collapse').collapse()


//initialing popovers 

$(function() {
  $('[data-toggle="popover"]').popover()
 
})


$(document).ready(function() {
    $("#info_popover").popover({
        placement: 'bottom',
        html: 'true',
        title : '<span class="text-info"><strong>title</strong></span>'+
                '<button type="button" id="close" class="close" onclick="$(&quot;#info_popover&quot;).popover(&quot;hide&quot;);">&times;</button>',
        content : 'test'
    });
});


//alert pop up on submit button click
$( "#submit" ).click(function() {
  alert( "Thank you for the feedback" );
});

// log in modal

//Display login in box when login button clicked
$("#logIn_btn").click(function(){
	alert("LogIn Test");
});

 $("#modal_trigger").leanModal({
	 top : 200, overlay : 0.6, 
	 closeButton: ".modal_close" 
});

$(function () {
    // Calling Login Form
    $("#login_form").click(function () {
        $(".social_login").hide();
        $(".user_login").show();
        return false;
    });

    // Calling Register Form
    $("#register_form").click(function () {
        $(".social_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function () {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $(".header_title").text('Login');
        return false;
    });

})	


 // connect to control panel when login successful
 function loadCtlPanel() {
    window.open("controlPanel.html", "_self");
}