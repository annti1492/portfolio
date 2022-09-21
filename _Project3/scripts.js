$(function(){
	var interval = 4000; /* 3초 간격*/
	$('.slideshow').each(function(){ /* 슬라이드 안에 있는 요소를 반복적으로 사용한다*/

		var container = $(this);

		function switchImg(){/* 1회분*/

			var imgs = container.find('img'); /*img요소를 전부 취득*/
			var first = imgs.eq(0); /* 선두의 eq는 몇번째꺼?*/
			var second = imgs.eq(1);/* 2번째의 img요소*/

		first.appendTo(container).fadeOut(); /* 처음 img를 페이드아웃시켜 맨 뒤로 이동*/
		second.fadeIn();/* 2번째 img를 페이드아웃 시킨다*/

		/* 여기까지가 4개의 이미지가 1번 돌아가는 과정*/
	};
	
	setInterval(switchImg, interval);
	/* 3초마다 swichImg를 실행*/

	});
});




var win;

function winOpen() {
    win = window.open('sub5.html', 'child', 'toolbar = no, location= no, status = no, menubar = no, resizable = no , scrollbars = no, width = 700, height = 1500')
}




$(window).scroll(function(){

    var Top = $(this).scrollTop();

    if( Top > 100){
        $("#topBtn").addClass('on');
    }
    if( Top < 100){
        $("#topBtn").removeClass('on');
    }
});

$("#topBtn").click(function(){

$("html, body").animate({scrollTop : 0}, 500);
});