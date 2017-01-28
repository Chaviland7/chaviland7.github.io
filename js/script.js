function positionStuff() {
  jQuery('.row.home-page.home').css('height',$(window).height() - 50);
  jQuery('#arrow_container').css('top',($(window).height() - 100) - ($(window).scrollTop() / 1.125));//correct height
  jQuery('#arrow_container').css('left',($(window).width()/2) - (jQuery('#arrow_container').width()/2));//correct centering

  $('#Home h1').css('left',($(window).width()/2) - ($('#Home h1').width()/2));
  $('#Home h3').css('left',($(window).width()/2) - ($('#Home h3').width()/2));
  $('#Home h1').css("top", 200/703*$(window).height() - ($(window).scrollTop() / 2.75));
  $('#Home h3').css("top", 375/703*$(window).height() - ($(window).scrollTop() / 1.85));
  var fromTopPx = parseInt(jQuery('.home-page.home').css('height').replace('px',''))+250; // distance to trigger
  var scrolledFromtop = jQuery(window).scrollTop(); //actual distance scrolled from the top of the page
  if(scrolledFromtop > fromTopPx){
      jQuery('body').addClass('scrolled');
      jQuery('nav.navbar-default').addClass('scrolled');
  }else{
      jQuery('body').removeClass('scrolled');
      jQuery('nav.navbar-default').removeClass('scrolled');
  }
}
/*$(function() {
  $(document).tooltip();
});*/
$(document).ready(function() {
  $("#arrow_container").css("opacity", 1 - $(window).scrollTop() / 600);
	$("#Home h1, #Home h3").css("opacity", 1 - $(window).scrollTop() / 800);
	jQuery(window).scroll(function(){
    positionStuff();
    $("#arrow_container").css("opacity", 1 - $(window).scrollTop() / 600);
  	$("#Home h1, #Home h3").css("opacity", 1 - $(window).scrollTop() / 800);
    /* Navbar Opacity */
    $("nav.navbar.navbar-default").css("background","rgba(74,74,74,"+($(window).scrollTop() / (jQuery(window).height() - 50))+")")
	});
  jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          jQuery('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  });
  $('body').scrollspy({target:'#navbar',offset:60});
  jQuery(function() {
		jQuery('#Home h1').css('position', 'fixed');
		jQuery('#Home h3').css('position', 'fixed');
		jQuery('#Home h1').css('top', '200px');
		jQuery('#Home h1').css('margin-top', '0px');
		jQuery('#Home h3').css('top', '350px');
		jQuery('#Home h1').css('width', '800px');
		jQuery('#Home h3').css('width', '800px');
    positionStuff();
	});
});
jQuery(window).resize(function() {
  positionStuff();
});
