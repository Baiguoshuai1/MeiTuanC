
$(function(){

	var localCookie=document.cookie;
	var cookieName=localCookie.split(";")[localCookie.split(";").length-1].split("=") [0];
	var cookieNameNum=localCookie.split(";")
	console.log(decodeURIComponent(cookieName))
	var strCookieN="";
		
		function deleteCookie(){
			for(let i=0;i<cookieNameNum.length;i++){
				strCookieN=cookieNameNum[i].split("=")[0];	//找出cookie的所有key
		  		var date=new Date(); 
		  		date.setTime(date.getTime()-10000); 
		 		document.cookie=strCookieN+"=s; expires="+date.toGMTString()+";path="+"/";//如果给cookie设置了path，删除也要设置同样的格式
		 		//document.cookie=strCookieN+"=s; expires="+date.toGMTString();
			//$.removeCookie(strCookieN)	//不兼容IE
				console.log(strCookieN)
			}
			location.href="MeiTuanIndex.html";
		}
		
		$(".exit").click(function(){
			deleteCookie();
			//location.href="../MeiTuanIndex.html"
		})
		$(".username").html(function(){			//改变用户名
			return decodeURIComponent(cookieName);
		})
		$(".username").prev().attr("src","../img/35ad1f9253761ea6ff822b5e659f234f3758.png")
		
		$(".username").click(function(){
			console.log(decodeURIComponent(localCookie));
		})
		
})


