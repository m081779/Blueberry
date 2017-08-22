$(document).ready(function () {
	$(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        //parallax for the main title

        $('.title').css({
            'transform' : 'translate(0px, '+ (wScroll/2)+'px)'
        });


        //make .img-table translate in

        if (wScroll > ($('.image-table').offset().top)-900) {
            $('.img').each(function (i) {

                setTimeout(function () {


                $('.img').eq(i).addClass('is-showing');
            }, 150 * (i+1));
            });
        }

        //make .img-table translate away

        else if (wScroll < ($('.image-table').offset().top)-500) {
            
            $('.img').each(function (i) {

                setTimeout(function () {


                $('.img').eq(i).removeClass('is-showing');
            }, 150 * (i+1));
            });
        }

        //make the footer appear

        if (wScroll > ($('.image-table').offset().top) - 100) {
        	$('.footer').css({
        		'opacity' : '0.6'
        	});

        //make the footer disappear	
        	
        } else if (wScroll < ($('.image-table').offset().top) - 100) {
        	$('.footer').css({
        		'opacity' : '0'
        	});
        }
        // end of scroll
    });
});