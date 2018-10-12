	var loginExit=function (){
		$(".a-login").html(cookieName);
		$(".a-login").attr("href","")//转到登陆后的个人信息
		$(".registe").attr("style","display: none;")
		$(".change").append("<a>退出</a>")
		$(".change").children("a:eq(2)").attr({style:"cursor:pointer",class:"exit2"})		
	}
	
var localCookie=document.cookie;
var cookieName=localCookie.split(";")[localCookie.split(";").length-1].split("=")[0];	
//	if(localCookie.length>0){
//		loginExit();
//	}
		
