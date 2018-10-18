	var localCookie=document.cookie;
	var obj=localCookie.split(";");
	var cookieJson={};				//cookie json对象
	var key=null;
	var value=null;
	for(let i in obj){
		key=$.trim(obj[i].split("=")[0])		//去除key前面空格！
		value=$.trim(obj[i].split("=")[1])
		cookieJson[key]=value
	}