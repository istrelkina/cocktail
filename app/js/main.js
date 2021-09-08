$(function(){

$('.list__items').each(function() {
	let ths = $(this);
	ths.find('.item').not(':first').hide();
	ths.find('.list__item').click(function() {
		ths.find('.list__item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	/*ths.find('.all-items-link').click(function() {
		alert('Возникла');
	});*/

	});
});

$('.all-items-link').on('click', function() {
	$('.list__items').each(function() {
		let ths = $(this);
		ths.find('.item').show();
	});
	$('.hidden-link').addClass('active');
});

$('.hidden-link').on('click', function() {
	$('.list__items').each(function() {
		let ths = $(this);
		ths.find('.item').not(':first').hide();
	});
	$('.hidden-link').removeClass('active');
});