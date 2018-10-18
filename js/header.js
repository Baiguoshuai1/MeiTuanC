
$(function(){
	console.log(document.cookie)
	console.log(cookieJson)
	console.log(cookieJson["username"])
		function deleteCookie(){
			for(let i in cookieJson){		//遍历出所有对象的属性(key)
		  		var date=new Date(); 		//i是键
		  		date.setTime(date.getTime()-10000); 
		 		document.cookie=i+"=s; expires="+date.toGMTString()+";path="+"/";//如果给cookie设置了path，删除也要设置同样的格式
			//$.removeCookie(strCookieN)	//不兼容IE
			}
		}
		$(".exit").click(function(){		//退出删除cookie
			deleteCookie();
			location.href="MeiTuanIndex.html"
		})
		if(cookieJson.username!==undefined){
			$(".username").html(function(){		//改变用户名
				return decodeURIComponent(cookieJson["username"]);
			})
				$(".visBox").add($(".vis-personBox")).attr("style","display: none;")
				$(".noBox").attr("style","display:inline-block")
				$(".no-personBox").attr("style","display: block;")
				$(".username").prev().attr("src","../img/35ad1f9253761ea6ff822b5e659f234f3758.png")
		}
		
		$(".ul-nav li").each(function(){
			$(this).hover(function(){						//显示右上角导航的子菜单
				$(this).not(".spec").not(".ul-nav-first li").toggleClass("ul-nav-liOneHover");
				$(this).children(".ul-nav-first").toggleClass("ul-nav-firstHover")
			})
		})
		$(".my-shopcar").click(function(){		//我的订单跳转
			if(cookieJson.username!==undefined){
				location.href="shopcar.html";
			}
			else{	
				location.href="login.html";			
			}
		})
	})