$(document).ready(function(){
	
	window.sr = ScrollReveal({
		delay		: 100,
		distance: '500px',
		duration:	'500',
		easing	: 'ease-in-out',
		mobile	:	true,
		opacity	:	0,
		reset		: true,
		scale		: .9
	});		
	
	sr.reveal('.sR_scale', { 
	   distance : '0px',
	   scale :	.1
	});
	
});