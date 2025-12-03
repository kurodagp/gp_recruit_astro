//==========================================================================
//top.js
//==========================================================================

//headerScroll
//---------------------------------------------------------
function headerScroll(scrollTop) {
	const targetPos = $('.headerPos').offset().top;
	if (scrollTop > targetPos) {
		$('.l-header').addClass('is-show');
	} else {
		$('.l-header').removeClass('is-show');
	}
}

//fixedTitle
//---------------------------------------------------------
function fixedTitle(scrollTop) {
	$('.fixed-title--pos').each(function () {
		const targetPos = $(this).offset().top;
		const targetTitle = $(this).attr('id');
		if (scrollTop > (targetPos - $(window).height() / 2) && scrollTop < (targetPos + $(this).outerHeight()) - $(window).height() / 2) {
			$(`.fixed-title [data-title="${targetTitle}"]`).addClass('is-active');
		} else {
			$(`.fixed-title [data-title="${targetTitle}"]`).removeClass('is-active');
		}
	});
}

//typing
//---------------------------------------------------------
function typing() {
	$('.typing').each(function () {
		const textArr = $(this).text().split('');
		$(this).text('');
		let i = 0;
		let flg = false;
		let target = $(this);
		let targetPos = $(this).parent('.typing-anime').offset().top;
		function typingInit() {
			target.addClass('is-start');
			setInterval(() => {
				if (i < textArr.length) {
					target.append(textArr[i]);
				} else {
					target.addClass('is-end');
					return;
				}
				i++;
			}, 120);
		}
		$(window).on('scroll', function () {
			let scrollTop = $(window).scrollTop();
			if (scrollTop > (targetPos - $(window).height() / 2)) {
				if (!flg) {
					if (target.hasClass('typing01')) {
						typingInit();
					}
					if (target.hasClass('typing02')) {
						setTimeout(() => {
							typingInit();
						}, 1200);
					}
				}
				flg = true;
			}
		});
	});
}

//mvRecommendSlider
//---------------------------------------------------------
let mvRecommendSwiper;
function mvRecommendSlider() {
	if (!mvRecommendSwiper) {
		mvRecommendSwiper = new Swiper(".mv-recommend__slider", {
			speed: 8000,
			spaceBetween: 20,
			loop: true,
			slidesPerView: 1.5,
			allowTouchMove: false,
			autoplay: {
				delay: 0,
			},
			breakpoints: {
				769: {
					slidesPerView: 3,
				}
			}
		});
	}
}
function mvRecommendSliderDestroy() {
	if (mvRecommendSwiper) {
    mvRecommendSwiper.destroy(false, true);
    mvRecommendSwiper = null;
  }
}

//peopleSlider
//---------------------------------------------------------
let peopleSwiper;
function peopleSlider() {
	if (!peopleSwiper) {
		peopleSwiper = new Swiper(".people__slider", {
			loop: true,
			speed: 500,
			slidesPerView: 1.2,
			spaceBetween: 20,
			navigation: {
				nextEl: ".people__slider .swiper-button-next",
				prevEl: ".people__slider .swiper-button-prev",
			},
			on: {
				init: function() {
				console.log('Swiper initialized');
				setTimeout(function() {
					$(window).trigger('scroll');
				}, 100);
				}
			},
			breakpoints: {
				768: {
					slidesPerView: 2.4,
					spaceBetween: 0,
				}
			}
		});
	}
}

function peopleSliderDestroy() {
	if (peopleSwiper) {
		peopleSwiper.destroy(false, true);
		peopleSwiper = null;
	}
}



//matchMedia
//---------------------------------------------------------
const handleMediaQuery = event => {
	if (event.matches) {
		mvRecommendSlider();
		peopleSlider();
	} else {
		mvRecommendSliderDestroy();
		// peopleSliderDestroy();
		peopleSlider();
		typing();
	}
}

const mediaQuery = window.matchMedia('(max-width: 1024px)');
window.addEventListener("load", () => handleMediaQuery(mediaQuery));
mediaQuery.addEventListener("change", handleMediaQuery);

//init
//---------------------------------------------------------
$(window).on('scroll', function () {
	let scrollTop = $(window).scrollTop();
	headerScroll(scrollTop);
	fixedTitle(scrollTop);
});

