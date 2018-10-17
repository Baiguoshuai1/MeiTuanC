$(function(){

	var localCookie=document.cookie;
	var cookieKey=localCookie.split(";")[localCookie.split(";").length-1].split("=") [0];
	var cookieName=localCookie.split(";")[localCookie.split(";").length-1].split("=") [1];
	var cookieNameNum=localCookie.split(";")
	console.log(decodeURIComponent(cookieName))
	var strCookieN="";
		function deleteCookie(){
			for(let i=0;i<cookieNameNum.length;i++){
				strCookieN=cookieNameNum[i].split("=")[0];	//找出cookie的所有key
		  		var date=new Date(); 
		  		date.setTime(date.getTime()-10000); 
		 		document.cookie=strCookieN+"=s; expires="+date.toGMTString()+";path="+"/";//如果给cookie设置了path，删除也要设置同样的格式
			//$.removeCookie(strCookieN)	//不兼容IE
				console.log(strCookieN)
			}
		}
//		function deleteCookie(){
//			var date=new Date();
//			date.setTime(date.getTime()-10000);
//			document.cookie="username=s; expires="+date.toGMTString()+";path="+"/";//如果给cookie设置了path，删除也要设置同样的格式
//			document.cookie="back-html=s; expires="+date.toGMTString()+";path="+"/";
//		}
		$(".a-login").click(function(){		//为了跳转页面
			$.cookie("back-html","MeiTuanLoginBack.html",{path:"/"})//先存储网页地址，跳到登陆页面再存储用户名
		})		
		$(".exit").click(function(){		//退出删除cookie
			deleteCookie();
			location.href="MeiTuanIndex.html"
		})
		if(cookieKey=="username"||cookieKey==" username"){
			$(".username").html(function(){		//改变用户名
				return decodeURIComponent(cookieName);
			})									//改变个人信息头像
			$(".username").prev().attr("src","../img/35ad1f9253761ea6ff822b5e659f234f3758.png")	
		}
		$(".ul-nav li").each(function(){
			$(this).hover(function(){						//显示右上角导航的子菜单
				$(this).not(".spec").not(".ul-nav-first li").toggleClass("ul-nav-liOneHover");
				$(this).children(".ul-nav-first").toggleClass("ul-nav-firstHover")
			})
		})
	})