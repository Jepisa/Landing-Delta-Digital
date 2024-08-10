$('.container-sidebar__btn svg').click(function(){
	$('.section-container__sidebar').toggleClass('active');
    $('body').toggleClass('active')
});
$('.sidebar-list__item a').click(function(){
	$('.section-container__sidebar').removeClass('active');
    $('body').removeClass('active');
});






$(document).on("scroll", function(){
  var pageHeight = $(document).height() - $(window).height();
  var pixels = $(document).scrollTop() + 200;
  var pix = $(document).scrollTop() + 100;
  	/* -- Sidebar -- */
  	if (pixels > $('.section-container').offset().top) {
    	$('.section-container__sidebar').addClass('in-action');
    }
    else{
        $('.section-container__sidebar').removeClass('in-action');    
    }
    if (pix > $('#about').offset().top  && pix < $('#services').offset().top)  {
    	$('.container-sidebar__text span').text('Sobre Nosotros');
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#about"]').addClass('active')
    }
    else if (pix > $('#services').offset().top  && pix < $('#process').offset().top) {
    	$('.container-sidebar__text span').text('Nuestros servicios')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#services"]').addClass('active')
    }
    else if (pix > $('#process').offset().top  && pix < $('#team').offset().top) {
    	$('.container-sidebar__text span').text('Cómo trabajamos')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#process"]').addClass('active')
    }
    else if (pix > $('#team').offset().top  && pix < $('#portfolio').offset().top) {
    	$('.container-sidebar__text span').text('Nuestro equipo')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#team"]').addClass('active')
    }
    else if (pix > $('#portfolio').offset().top  && pix < $('#clients').offset().top) {
    	$('.container-sidebar__text span').text('Portafolio')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#portfolio"]').addClass('active')
    }
    else if (pix > $('#clients').offset().top  && pix < $('#testimonials').offset().top) {
    	$('.container-sidebar__text span').text('Clientes')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#clients"]').addClass('active')
    }
    else if (pix > $('#testimonials').offset().top  && pix < $('#contact').offset().top) {
    	$('.container-sidebar__text span').text('Testimonios')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#testimonials"]').addClass('active')
    }
    else if (pix + 100 > $('#contact').offset().top) {
    	$('.container-sidebar__text span').text('¡Trabajemos en tu proyecto!')
    	$('.sidebar-list__item a').removeClass('active')
    	$('.sidebar-list__item a[href="#contact"]').addClass('active')
    }
    else{
    	$('.container-sidebar__text span').text('')
    	$('.sidebar-list__item a').removeClass('active')
    }

    if (!$('.section-container__sidebar').hasClass('in-action')) {
		$('.section-container__sidebar').removeClass('active')
	}





    /* -- Procesos -- */
    if (pixels > $('#stage1').offset().top) {
    	$('#stage1').addClass('in-action');
    }
    else{
        $('#stage1').removeClass('in-action');    
    }

    if (pixels > $('#stage2').offset().top) {
    	$('#stage2').addClass('in-action');
    }
    else{
        $('#stage2').removeClass('in-action');    
    }

    if (pixels > $('#stage3').offset().top) {
    	$('#stage3').addClass('in-action');
    }
    else{
        $('#stage3').removeClass('in-action');    
    }

    if (pixels > $('#stage4').offset().top) {
    	$('#stage4').addClass('in-action');
    }
    else{
        $('#stage4').removeClass('in-action');    
    }


    
})
