$(document).on("ready",
	function(){
		$(".boton-individual").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to('.terapia-individual', 0.5, {y: 50, bottom:-50, opacity:1});
				$(".terapia-individual").css({display: "block",});
		    });
		$(".im-cierre").on("click", function(e){
				e.preventDefault();
				TweenLite.to(".terapia-individual", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".terapia-individual").css({display: "none"});
				}});
			});	

//------------		
		$(".boton-terapia-pareja").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to('.terapiadepareja', 0.5, {y: 50, bottom:-50, opacity:1});
				$(".terapiadepareja").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".terapiadepareja", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".terapiadepareja").css({display: "none"});
				}});
			});

//------------				
		$(".boton-terapia-infantil").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-infa-juvenil", 0.5, {y: 50, bottom:-50, opacity:1});
					$(".ter-infa-juvenil").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-infa-juvenil", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-infa-juvenil").css({display: "none"});
				}});
			});

//------------		
		$(".boton-familia").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-familiar", 0.5, {y: 50, bottom:-50, opacity:1});
				$(".ter-familiar").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-familiar", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-familiar").css({display: "none"});
				}});
			});

//------------		
		$(".boton-acupuntura").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".acupuntura", 0.5, {y: 50, bottom:-50, opacity:1});
				$(".acupuntura").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".acupuntura", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".acupuntura").css({display: "none"});
				}});
			});
//------------		
		$(".boton-bioenergetica").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-bio", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-bio").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-bio", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-bio").css({display: "none"});
				}});
			});
//------------		
		$(".boton-auri").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-auri", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-auri").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-auri", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
				$(".ter-auri").css({display: "none"});
				}});
			});
//------------		
		$(".boton-masaje").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-masaje", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-masaje").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-masaje", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-masaje").css({display: "none"});
				}});
			});

//------------		
		$(".boton-constelaciones").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-constelaciones", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-constelaciones").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-constelaciones", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-constelaciones").css({display: "none"});
				}});			
			});

//------------		
		$(".boton-herbolaria").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-herbolaria", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-herbolaria").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-herbolaria", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-herbolaria").css({display: "none"});
				}});
			});

//------------		
		$(".boton-zen").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-meditacion", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-meditacion").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-meditacion", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-meditacion").css({display: "none"});
				}});
			});

//------------		
		$(".boton-floral").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-floral", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-floral").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-floral", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-floral").css({display: "none"});
				}});
			});

//------------		
		$(".boton-aromaterapia").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-aromaterapia", 0.5, {y:50, bottom:-50, opacity:1});
				$(".ter-aromaterapia").css({display: "block"});
			});
		$(".im-cierre").on("click",
			function(e){
				e.preventDefault();
				TweenLite.to(".ter-aromaterapia", 0.5, {y: -20, bottom:0, opacity:0, onComplete: function(){
					$(".ter-aromaterapia").css({display: "none"});
				}});
			});

//------------		
		$("#im-tel").on("mouseover",
			function(){
				$("#num").css({display: "block"});			
			});
		$("#im-tel").on("mouseleave",
			function(){
				$("#num").css({display: "none"});
			});
//------------	//------------	MENU //------------	//------------
	$('.navigation a').on('click', function(e){
		var section = $(this).attr('href');
		TweenLite.from(section, 0.5, {css:{autoAlpha:0}});
	});
//------------	//------------	VALIDACION FORM //------------	//------------
	$('#lista-terapias').on('change', function(){
		$(this).removeClass("rojo");
	});
	$('#submit-form').submit(function() {
		var $form		= $(this);
		var name 		= $("#name-text").val();
		var email 		= $("#mail-text").val();
		var phone		= $("#phone-text").val();
		var therapy 	= $("#lista-terapias").val();
		var nameIsString	= /[A-Za-z\ ]+/.test(name);
		var emailIsValid	= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);
		var isError 		= false;

		if(!name || !nameIsString){
			$("#name-text").addClass("rojo");
			$("name-text").val("");
			isError = true;
		}
		if(!email|| !emailIsValid){
			$("#mail-text").addClass("rojo");
			$("#mail-text").val("");
			isError = true;
		}
		if(!phone){
			$("#phone-text").addClass("rojo");
			$("#phone-text").val("");
			isError = true;
		}
		if(!therapy){
			$('#lista-terapias').addClass("rojo");
			isError = true;
		}
		if(isError){
			$("#dat-obli").css({display: "block"});
			return false;
		}else{
			$("#dat-obli").css({display: "none"});
		}
		var base64email = "Y2FzcGguaW1hQGdtYWlsLmNvbQ==";
		var baseURL = "//formspree.io/";
		$.ajax({
			url: baseURL + atob(base64email),
			method: "POST",
			data: {nombre: name, email: email, telefono: phone, terapia: therapy, _subject: "CAPSHI.COM :: " + name + " desea agendar una cita" },
			dataType: "json",
			success: function(){
				var $p = $("<p id='dat-success'>Tu correo ha sido enviado y tu cita será agendada a la brevedad ¡Buen día!</p>");
				$form.prepend($p);
				$p.delay(3000).fadeOut(400, function(){
					$("#name-text").val('');
					$("#mail-text").val('');
					$("#phone-text").val('');
					$("#lista-terapias").val('');
					$p.remove();
				});			
			},
			error: function(){
				alert("No fue posible enviar tu correo, inténtalo nuevamente.");
			}
		});
		return false;
	});
});