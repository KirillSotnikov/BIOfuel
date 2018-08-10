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


	$('.tabulation_list_item').removeClass('active');
	$(this).addClass('active');

	$('.tabulation_content').removeClass('active');
	$('.tabulation_content' + target).addClass('active');
});
$('.call-button').click(function() {
    $('.modal-container').addClass('active');
});
$('.up_close_arrow').click(function() {
    $('.modal-container').removeClass('active');
});
$('.slider.order-now_container').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 571,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
	prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
	nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
});