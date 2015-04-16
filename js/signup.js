$(function() {

	// 'use strict';
	// var $body = $('html, body'),
	// 	content = $('#main').smoothState({
	// 		onStart: {
	// 			duration: 250,
	// 			render :function() {
	// 				content.toggleAnimationClass('is-exiting');
	// 				$body.animate({'scrollTop': 0});
	// 			}
	// 		}
	// 	}).data('smoothState');

	$("#member-1").keyup(function(){

		if ( $("#member-1").val() !== "" ){
			if ( $(".info-member:first").is(":hidden") ){
				$(".info-member:first").slideDown("slow");
			}
		}
	});
	$("#member-2").keyup(function(){
		if ( $("#member-2").val() !== "" ){
			if ( $(".info-member").eq(1).is(":hidden") ){
				$(".info-member").eq(1).slideDown("slow");
			}
		}
	});
	$("#member-1").change(function(){
		console.log("inside change");
		if ( $("#member-1").val() === "" ){
			console.log("empty");
			if ( !($(".info-member").eq(0).is(":hidden")) ){
				$(".info-member").eq(0).slideUp();
			}
		}
	});

	$("select").change(function(){
		$(this).removeClass("placeholder");
	});

	
	$("#scavenger_submit").click(function(){
		console.log("clicked");
		send_signup_data();
		document.location.href = "/";
	});


});
function aggregate_data(){
	jsonForm = {};
	$("input").each(function(){
		jsonForm[$(this).attr("id")] = this.value;
	});
	$("select").each(function(){
		jsonForm[$(this).attr("id")] = $(this).val();
	});

	return jsonForm;
}

function send_signup_data(){
	$.ajax({
		type: "POST",
		data: aggregate_data(),
		url: "server/create_user.php",
		dataType: "text",

	});
}

