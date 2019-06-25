
$(function () {
	
	//прелоадер
	setTimeout(function(){
		
		var $preloader = $('#page-preloader'),
			$spinner =$preloader.find('.loader');
		$spinner.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	},1500);	

	$(".link-scroll").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	$('.menu-burger').on('click', function(e) {
		e.preventDefault();
		$('.menuBorder').toggleClass('menu_active');
		$('.content').toggleClass('content_active');
	})

	$(".rightHead__search").click(function () {
		$('.rightHead__inpSearch').toggleClass('d-none');
	});

	$(".footer-section__text").click(function () {
		$('.content-item:nth-child(4)').toggleClass('d-flex');
	});
	

	$('.slider-banner').slick({
	  dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  arrows: true,
	  fade: false,
	  prevArrow: '<img src="img/Arrow-left.png" alt="left" class="prev-arrow">',
      nextArrow: '<img src="img/Arrow-right.png" alt="right" class="next-arrow">',
	});

	$('.slider-product').slick({
	  dots: false,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: false,
	  arrows: true,
	  fade: false,
	  prevArrow: '<img src="img/Arrow-left.png" alt="left" class="slider-product__prev-arrow">',
      nextArrow: '<img src="img/Arrow-right.png" alt="right" class="slider-product__next-arrow">',
      responsive: [
	    {
	      breakpoint: 1550,
	      settings: {
	        slidesToShow: 5,
	      }
	    },
	    {
	      breakpoint: 1370,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	      	rows: 2,
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	      	arrows: false,
	      	rows: 2,
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	      	arrows: false,
	      	rows: 4,
	      	swipe: false,
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	$('.btn-click').click(function(){
    	$('#exampleModal').arcticmodal();
    });

});


