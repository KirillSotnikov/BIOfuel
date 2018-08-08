$('.menu_image').click(function() {
    $('.menu').addClass('active');
});
$('.close_btn').click(function() {
    $('.menu').removeClass('active');
});

$('[data-tab]').click(function() {

	var target = $(this).attr('data-tab');
	
	$('.order-now_list a').removeClass('active');
	$(this).addClass('active');

	$('.order-now_container .order-now_grid').removeClass('active');
	$('.order-now_container .order-now_grid' + target).addClass('active');

});
$('.call-button').click(function() {
    $('.modal-container').addClass('active');
});
$('.up_close_arrow').click(function() {
    $('.modal-container').removeClass('active');
});