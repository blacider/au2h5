$(document).ready(function () {
	initquestion();
	mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    onlyExternal: true,
  	});   
})
function chose(data, answerDom, index) {
	if (answer[index] != data)
		answerDom.find('.content-light img').attr('src', 'static/img/P3-RED-LIGHT.png');
	if (answer[index] == 2)
		answerDom.find('.content-light img').attr('src', 'static/img/P3-YELLOW-LIGHT.png');
	answerDom.animate({top:'0'}, 300);
	answerDom.animate({top:'-10%'}, 100);
	answerDom.animate({top:'0'}, 100);
}
function initquestion() {
	for (var i = 0; i < number; i++) {
		var dom =   '<div class="swiper-slide content_" id="p' + String(i+2) + '">'+
				'	<div class="content-img">'+
				'		<img class="img" src="static/img/P'+ String(i+1) +'-answer.png" alt="图片">'+
				'	</div>'+
				'	<div class="content-question">'+
				'		<img class="question img" src="static/img/P2-question.png" alt="question">'+
				'	</div>'+
				'	<div class="content-text">'+
				'		<p>'+ questions[i] +'</p>'+
				'	</div>'+
				'	<div class="content-judge">'+
				'		<img class="wrong" onclick="chose(0, $(this).parent().next(), '+ String(i) +')" src="static/img/P2-wrong-icon (2).png" alt="wrong">'+
				'		<img class="right" onclick="chose(1, $(this).parent().next(), '+ String(i) +')" src="static/img/P2-right-icon-click.png" alt="right">'+
				'	</div>'+
				'	<div class="answer" style="position:relative">'+
				'	<div class="content-light">'+
				'		<img class="img" src="static/img/P3-GREEN-LIGHT.png" alt="light">'+
				'	</div>'+
				'	<div class="content-main">'+
				'		<img class="img" src="static/img/P3-BACKEGROUND.png" alt="background">'+
				'		<p>'+ answer_content[i] +'</p>'+
				'	</div>'+
				'	<div class="content-next">'+
				'		<img src="static/img/P3-NEXT.png" onclick="mySwiper.slideNext()" class="img" alt="next">'+
				'	</div>'+
				'</div>'+
				'</div>';
		$('#p'+String(i+1)).after(dom);
	}
}