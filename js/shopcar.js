	var cookieName=document.cookie.split(";")[document.cookie.split(";").length-2].split("=") [1];//前面是goodsId,再前面是跳转前的网址
	var shopNum=$(".num-input").length;		//总共商品的种类数量
	function allPrice(){
		var allprice=0;
		var money=0;
		for(let i=0;i<shopNum;i++){
			let utNum=parseInt($(".num-input")[i].value);	//单种商品数量
			let utPrice=Number($(".D-price")[i].innerHTML)	//该商品单价
			money=utNum*utPrice;
			$(".D-Allprice")[i].innerHTML=money;
			allprice+=money
		}
		$(".sum-price").html(allprice)
	}
	$(function(){
		$(".username").html(function(){		//改变用户名
			return decodeURIComponent(cookieName);
		})	
		allPrice();
		$(".first-tr").nextAll().addClass("tr-style");
		$("tr").last().removeClass("tr-style");
		for(let i=0;i<shopNum;i++){
			$(".min-btn")[i].onclick=function(){
				let utNum=parseInt($(".num-input")[i].value);
					if(utNum>0){
						utNum--;
						$(".num-input")[i].value=utNum;
						allPrice()
					}
				}
			$(".max-btn")[i].onclick=function(){
				let utNum=parseInt($(".num-input")[i].value);
					if(utNum<99){
						utNum++;
						$(".num-input")[i].value=utNum;
						allPrice()
					}
				}
			$(".num-input")[i].onkeyup=function(){
				let utNum=parseInt($(".num-input")[i].value);
				if(utNum<99){
					allPrice()
					}
				}
			}
		})
