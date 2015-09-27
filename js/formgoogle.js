function postGoogle_f1() {
	var f1 = $('#entry_1977547154').val();
	var f2 = $('#entry_661047309').val();

	$.ajax({
		url: "https://docs.google.com/forms/d/1q92QPqS6P4gfUMreroUoZvo6DITgNm85IzzvM5N7SQI/formResponse",
		data: {"entry.1977547154": f1, "entry.661047309": f2},
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function() {
				$('#ss-form .success-message').addClass('animate-b');
				$('#ss-form .ss-q-short').val('');
			},
			200: function() {
				$('.success-message').addClass('animate-b');
				$('.ss-q-short').val('');
			}
		}
	});
};

function postGoogle_f2() {
	var f1 = $('#entry_1977547154').val();
	var f2 = $('#entry_661047309').val();

	$.ajax({
		url: "https://docs.google.com/forms/d/1q92QPqS6P4gfUMreroUoZvo6DITgNm85IzzvM5N7SQI/formResponse",
		data: {"entry.1977547154": f1, "entry.661047309": f2},
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function() {
				$('#ss-form-2 .success-message').addClass('animate-b');
				$('.ss-q-short').val('');
			},
			200: function() {
				$('#ss-form-2 .success-message').addClass('animate-b');
				$('.ss-q-short').val('');
			}
		}
	});
};

function postGoogle_f3() {
	var f1 = $('#entry_1977547154').val();
	var f2 = $('#entry_661047309').val();

	$.ajax({
		url: "https://docs.google.com/forms/d/1q92QPqS6P4gfUMreroUoZvo6DITgNm85IzzvM5N7SQI/formResponse",
		data: {"entry.1977547154": f1, "entry.661047309": f2},
		type: "POST",
		dataType: "xml",
		statusCode: {
			0: function() {
				$('#ss-form-popup .success-message').addClass('animate-b');
				$('.ss-q-short').val('');
			},
			200: function() {
				$('#ss-form-popup .success-message').addClass('animate-b');
				$('.ss-q-short').val('');
			}
		}
	});
};


function DeleteClass() {
	$('.success-message').removeClass('animate-b');
}

$(document).ready(function(){

	$('#ss-form').submit(function() {
		if ($('#entry_1977547154').val() == "") {
			$('#error-m-1').css('display', 'block');
			$('#entry_1977547154').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-1').css('display', 'none');
			$('#entry_1977547154').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		if ($('#entry_661047309').val() == "") {
			$('#error-m-1').css('display', 'block');
			$('#entry_661047309').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-1').css('display', 'none');
			$('#entry_661047309').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		postGoogle_f1();
		setTimeout(DeleteClass, 3800);
		return false;
	});
	$('#ss-form-2').submit(function() {
		if ($('#ss-form-2 #entry_1977547154').val() == "") {
			$('#error-m-2').css('display', 'block');
			$('#ss-form-2 #entry_1977547154').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-2').css('display', 'none');
			$('#ss-form-2 #entry_1977547154').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		if ($('#ss-form-2 #entry_661047309').val() == "") {
			$('#error-m-2').css('display', 'block');
			$('#ss-form-2 #entry_661047309').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-2').css('display', 'none');
			$('#ss-form-2 #entry_661047309').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		postGoogle_f2();
		setTimeout(DeleteClass, 3800);
		return false;
	});
	$('#ss-form-popup').submit(function() {
		if ($('#ss-form-popup #entry_1977547154').val() == "") {
			$('#error-m-3').css('display', 'block');
			$('#ss-form-popup #entry_1977547154').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-3').css('display', 'none');
			$('#ss-form-popup #entry_1977547154').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		if ($('#ss-form-popup #entry_661047309').val() == "") {
			$('#error-m-3').css('display', 'block');
			$('#ss-form-popup #entry_661047309').css('border', '1px solid rgba(231, 76, 60,1.0)');
			return false;
		}
		else {
			$('#error-m-3').css('display', 'none');
			$('#ss-form-popup #entry_661047309').css('border', '1px solid rgba(0, 0, 0, .6)');
		}
		postGoogle_f3();
		setTimeout(DeleteClass, 3800);
		return false;
	});
	$(document).on('click', '#popup', function(event){
		event.preventDefault();
		$('body').css('overflow', 'hidden');
		$('#overlay').fadeIn(400,
			function(){
				$('#modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
			});
	});
	$(document).on('click', '#modal_close, #overlay', function(){
		$('body').css('overflow', 'auto');
		$('#modal_form').animate({opacity: 0, top: '45%'}, 200,
			function(){
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			})
	});
});