//MeiTuanLogin1.html
var localCookie=document.cookie;
var cookieName=localCookie.split(";")[localCookie.split(";").length-1].split("=")[0];
	$(".username").html(function(){			//改变用户名
		return cookieName;
	})
	$(".username").click(function(){
		console.log(localCookie)
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
