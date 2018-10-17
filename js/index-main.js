
var clickpointerBoxCount=0;
var clickpointerBoxCount2=0;
	function pointerBox1(){
		clickpointerBoxCount++;
		if(clickpointerBoxCount==1){		//防止连续多次点击按钮图片停顿
			$(".movieUlOne").stop(true,true);
			$(".movieUlTwo").stop(true,true);
			
		}
			$(".movieUlOne").animate({
				left:-1168
			},600,function(){clickpointerBoxCount=0;})
			$(".movieUlTwo").animate({
				left:0
			},600,function(){clickpointerBoxCount=0;})	
	}
	
	function pointerBox2(){
		clickpointerBoxCount2++;
		if(clickpointerBoxCount2==1){
			$(".movieUlOne").stop(true,true);
			$(".movieUlTwo").stop(true,true);
		}
			$(".movieUlOne").animate({
				left:0
			},600,function(){clickpointerBoxCount2=0;})
			$(".movieUlTwo").animate({
				left:1168
			},600,function(){clickpointerBoxCount2=0;})
	}

$(function(){
	$(".left-banner-container-lie li").each(function(){	
		$(this).hover(function(){//循环显示分类的列表效果
			$(this).addClass("hover1");					//修复刷新的时候鼠标在该元素上的bug
			$(this).children().addClass("hover2");
			$(this).append($(".left-banner-container-content"))	//把二级菜单的内容添加到此时的li里
			$(".left-banner-container-content").stop();			//防止之前的效果重复显示
			$(".left-banner-container-content").fadeIn(180);
			$(".left-banner-container-content h2 a").html($(this).attr("value"))
		},function(){
			$(this).removeClass("hover1");
			$(this).children().removeClass("hover2");
			$(".left-banner-container-content").stop();
			$(".left-banner-container-content").fadeOut(180);
		})
	})
	$(".right-banner-header-nav a").each(function(n){	//给导航字体换颜色
		$(this).hover(function(){
			$(this).addClass("right-banner-header-nav"+parseInt(3*Math.random()))
		},function(){
			$(this).removeClass();
			})
	})

	$(".four-sliderBox-pointerBox")[1].onclick=function(){		//电影轮播ul
		pointerBox1();
	}
	$(".four-sliderBox-pointerBox")[0].onclick=function(){
		pointerBox2();
	}
	$(".slider").hover(function(){
		$(".four-sliderBox-pointerBox").stop();
		$(".four-sliderBox-pointerBox").fadeIn(400)
	},function(){
		$(".four-sliderBox-pointerBox").stop();
		$(".four-sliderBox-pointerBox").fadeOut(400)
	})
		let slider=new Slider(				// 轮播图
		$(".slider-imgBox")[0],
		550,
		240,
		["../img/daa73310c9e57454dc97f0146640fd9f69772.jpg","../img/a97baf515235f4c5a2b1323a741e577185048.jpg","../img/33ff80dc00f832d697f3e20fc030799560495.jpg","../img/e419ae8488f776407459b0ee7eada070286451.jpg"],
		10,
		2,
		"#eee",
		"#fff",
		false,
		true,
		"#",
		3000
		)	
	})










