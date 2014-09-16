$(document).ready(function(){
	/*scroller*/
	$('.slim-scroll').each(function () {
			var $this = $(this);
				$this.slimScroll({
					height: $this.data('height') || 100,
					railVisible: true,
					railOpacity: 1,
					color: '#ffcd0a',
					railColor: '#00522d',
					opacity:1
		});
	});
	$('.events-details .nano-slider').height(20);
	$('.slimScrollDiv .slimScrollBar').css({'display':'none'});
	/*checkbox----------*/
	function radio(){
		$('form .question  input:checked').each(function(){
			var dataSource = $(this).data('input');
			$('.question .checkboxe[data-input~="'+dataSource+'"]').each(function(){
					$(this).addClass('active');
			});
		});
		
	}
	radio();

	$('.checkboxe').click(function(){
		var parent = $(this).parent().attr('id');
		console.log(parent);
		$('#'+parent).each(function(){
			$(this).children().removeClass('active');
		});
		$(this).addClass('active');
	});//finish click

	/*menu----------*/
	function all(){
		$('.menu-content-bl .item').tsort('h3',{order:'asc'});
		$('.menu-book li a').each(function(){
			var classa = $(this).attr('class');
			if(classa == 'active'){
				var dataSource = $(this).data('source');
				var sum = $('.content-menu div.item[data-category~="'+dataSource+'"]').each(function(){
					$(this).addClass('active');
				});
			}
		});//finish each
	}
	all();

	$('.menu-book li a').click(function(event){
		if($(this).hasClass('active')){
			event.preventDefault();
		}else{
			$('.menu-book li a').removeClass('active');
			$(this).addClass('active');
			$(this).each(function(){
				$('.content-menu div.item').slideUp(700).removeClass('active');
				var dataSource = $(this).data('source');
				var sum = $('.content-menu div.item[data-category~="'+dataSource+'"]').each(function(){
					$(this).slideDown(700).addClass('active');
				});
			});//finish each
		}
	});//finish click

	/*nth-child*/
	if ('\v' == 'v') { 
		/*shadow*/
		if (!Modernizr.textshadow) {
			$('.bottom-slidebar li a').textshadow('0 8px 4px #000000');
		} 
	}

    if (!('\v' == 'v')) { 
		$('#logo-bottom-text').circleType({radius: 180, dir:-1});
		$('#logo-top-text').circleType({radius: 180});
	}
	/*header*/
	function menuWidth(totalWidth,leftMenu,rightMenu,diference){
	totalWidth = $(window).outerWidth();
			$left = $('.menu .left-menu');
			$right = $('.menu .right-menu');
			if((totalWidth <= 1142 )||( 998 >= totalWidth)){
					leftMenu = $left.width();
					rightMenu = $right.width();
					diference = (1142 - totalWidth)/2;
				if(diference >= 0){
						leftMenu = 72 - diference;
						rightMenu = 72 - diference;
						$right.css('right', '-' + rightMenu + 'px');
						$left.css({'left': '-' + leftMenu + 'px','background-position':'-' + diference + 'px 0px' });
						$left.width(leftMenu);
						$right.width(rightMenu);
				}
			}else{
				$left.width(72);
		 		$right.width(72);
		 		$right.css('right', '-72px');
			 	if((0 <= diference)|| (diference <= 72) ){
			 		$left.css({'left':'-72px','background-position':'-' + diference + 'px 0px' });
			 	}
				else{
					$left.css({'left':'-72px','background-position':'0px 0px' });
				}
			}
	}
	menuWidth();
	$(window).resize(function() { menuWidth();});//finish window
	$('#evnts-carousel .flex-viewport').css({'overflow':'visible'});
	$('#evnts-slider .flex-direction-nav .flex-prev,#evnts-slider .flex-direction-nav .flex-next').addClass('carousel-control');
	$('#evnts-slider .flex-direction-nav .flex-prev').append('<span class="icon-next">Prev</span>');
	$('#evnts-slider .flex-direction-nav .flex-next').append('<span class="icon-next">Next</span>');

/*jplayer*/
	$.getJSON( "js/playlist/playlist.json", function(data) {
		console.log(data);
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_1",
			cssSelectorAncestor: "#jp_container_1"
		},data, {
			swfPath: "js",
			supplied: "oga, mp3,wav",
			smoothPlayBar: true,
			keyEnabled: true,
			audioFullScreen: true,
			loop:true
		});
	});
});//finish ready
















