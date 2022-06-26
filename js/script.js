function positionStuff() {
  jQuery('.row.home-page.home').css('height',$(window).height() - 50);
  jQuery('#arrow_container').css('top',($(window).height() - 100) - ($(window).scrollTop() / 1.125));//correct height
  jQuery('#arrow_container').css('left',($(window).width()/2) - (jQuery('#arrow_container').width()/2));//correct centering
  $("#arrow_container").css("opacity", 1 - $(window).scrollTop() / 600);
	$("#Home h1, #Home h3").css("opacity", 1 - $(window).scrollTop() / 800);
  $('#Home h1, #Home h3').css('width', ($(window).width()*.9));
  /* Position Title & Subtitle */
  $('#Home h1').css('left',($(window).width()/2) - ($('#Home h1').width()/2));
  $('#Home h3').css('left',($(window).width()/2) - ($('#Home h3').width()/2));
  $('#Home h1').css("top", 200/703*$(window).height() - ($(window).scrollTop() / 2.75));
  $('#Home h3').css("top", 375/703*$(window).height() - ($(window).scrollTop() / 1.85));
  let fromTopPx = parseInt(jQuery('.home-page.home').css('height').replace('px',''))+250; // distance to trigger
  let scrolledFromtop = $(window).scrollTop(); //actual distance scrolled from the top of the page
  if(scrolledFromtop > fromTopPx){
      jQuery('body').addClass('scrolled');
      jQuery('nav.navbar-default').addClass('scrolled');
  }else{
      jQuery('body').removeClass('scrolled');
      jQuery('nav.navbar-default').removeClass('scrolled');
  }
  /* Navbar Opacity */
  $("nav.navbar.navbar-default").css("background","rgba(74,74,74,"+($(window).scrollTop() / (jQuery(window).height() - 50))+")")
}
function get_tenures() {
  let jobs = $(".row.job")
  jobs.each(function() {
    let years = $(this).find(".years")[0].innerHTML.split(' - ')
    if (years[1] == "Present") {
      let new_tenure = ''
      let now = new Date()
      let start = new Date(years[0])
      let timeAtJob = parseInt((now-start) / (1000 * 60 * 60 * 24))
      if (timeAtJob > 365) {
        new_tenure += "(" + Math.floor(timeAtJob / 365) + " Years"
        timeAtJob -= Math.floor(timeAtJob / 365) * 365
      }
      if (timeAtJob > 30) {
        new_tenure += ", " + Math.floor(timeAtJob / 30) + " Months)"
      } else if (new_tenure == ''){
        new_tenure = '(0 Months)'
      } else {
        new_tenure += ")"
      }
      $(this).find(".tenure")[0].innerHTML = new_tenure
    }
  })
}
function cycleImages(){
    var images = $('.background-image'),
        now    = images.filter(':visible'),
        next   = now.next().length ? now.next() : images.first(),
        speed  = 1500;
    now.fadeOut(speed);
    next.fadeIn(speed);
}
function cycleCaptions(){
    var captions = $('.background-image-caption'),
        now    = captions.filter(':visible'),
        next   = now.next().length ? now.next() : captions.first(),
        speed  = 1500;
    now.fadeOut(speed);
    next.fadeIn(speed);
}
$(document).ready(function() {
  positionStuff();
  get_tenures();
  $(function() {
      setInterval(cycleImages, 4500);
      setInterval(cycleCaptions, 4500);
  });
  let music_title_left = $('#music_title').offset().left;
	jQuery(window).scroll(function(){
    $('#Interests .affix').css('left',music_title_left);
    positionStuff();
	});
  /* Smooth Scrolling to a tags */
  jQuery(function() {jQuery('a[href*="#"]:not([href="#"])').click(function() {if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {let target = jQuery(this.hash);target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');if (target.length) {jQuery('html, body').animate({scrollTop: target.offset().top - 60}, 1000);return false;}}});});
  $('body').scrollspy({target:'#navbar',offset:61});
  let age = Math.abs(new Date().getTime() - new Date("10/21/1996").getTime());
  $('#age').text(Math.floor(age/1000/60/60/24/365) + ' Years')
});
$(window).on('load',function(e) {
  $('#swimming_title').affix({
    offset: {
      top: $('#swimming_title').offset().top - 100,
      bottom: function () {
        return (this.bottom = $(document).height() - $('#end_swimming_title').offset().top + 20)
      }
    }
  });
  $('#music_title').affix({
    offset: {
      top: $('#music_title').offset().top - 100,
      bottom: function () {
        return (this.bottom = $(document).height() - $('#end_music_title').offset().top + 20)
      }
    }
  });
  $('#cars_title').affix({
    offset: {
      top: $('#cars_title').offset().top - 100,
      bottom: function () {
        return (this.bottom = $(document).height() - $('#end_cars_title').offset().top + 20)
      }
    }
  });
  $('#favorites_title').affix({
    offset: {
      top: $('#favorites_title').offset().top - 100,
      bottom: function () {
        return (this.bottom = $(document).height() - $('#end_favorites_title').offset().top + 20)
      }
    }
  });
})
jQuery(window).resize(function() {
  positionStuff();
});
