$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$('#loader').fadeOut('slow');
  $('#content').fadeIn('slow');
  $('#content2').fadeIn('slow');
  setTimeout(() => { 
  	AOS.refresh();
  }, 500);

function handleHover(itemId){
  $('#'+itemId).css('display', 'block');
  $('#'+itemId).addClass('animate__fadeIn');
  $('#'+itemId).removeClass('animate__fadeOut');
}
function handleHoverLeave(itemId){
  $('#'+itemId).css('display', 'none');
  $('#'+itemId).addClass('animate__fadeOut');
  $('#'+itemId).removeClass('animate__fadeIn');
}

function openNav(button){
	// button.classList.toggle('opened');
	// button.setAttribute('aria-expanded', button.classList.contains('opened'));
	$('#myNav').css('width', "100%");
	$('body').addClass('overlayBody');
}
/* Open when someone clicks on the span element */


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $('#myNav').css('width', "0%");
	$('body').removeClass('overlayBody');
}

const height = $(window).height();
$(window).scroll(() => {
  if($(window).scrollTop() > 50){
    $('.logo').width('230px');
    $('.logo').height('60px');
    // $('.navTransition').css('background-color', 'rgba(255,255,255, 0.9)');
  }
  else{
    $('.logo').width('280px');
    $('.logo').height('80px');
    // $('.navTransition').css('background-color', 'rgba(255,255,255, 0)');
  }
});
// $(window).resize(() => {
// 	let presentation = $('#presentation');
// 	console.log(window.screen.width);
// 	presentation[0].height = window.screen.width * .9;
// 	presentation[0].width = window.screen.width * .9;
// 	console.log(presentation[0].height);
// 	console.log(presentation[0].width);
// });