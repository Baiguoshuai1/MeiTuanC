
	function showshopcar(obj){
		for(let i in obj){
			$("tbody").append("<tr class=addTrbox>"+
									"<td>"+
										"<a class=shop-Name href=>miss蛋糕:水果蛋糕</a><label class=deleteshop style=cursor:pointer;color:#28c0ac;font-size:12px;margin-left:20px>删除</label>"+
									"</td>"+
									"<td>￥<span class=D-price>98</span></td>"+
									"<td>"+
										"<div class=input-number>"+
											"<button class=min-btn type=button><i class=iconfont>&#xe675;</i></button>"+
											"<input type=text class=num-input input value=1>"+
											"<button class=max-btn type=button><i class=iconfont>&#xe64f;</i></button>"+
										"</div>"+
									"</td>"+
									"<td>"+
										"￥<span class=D-Allprice>98</span>"+
									"</td>"+
								"</tr>")
			
			$(".first-tr").nextAll().addClass("tr-style");
			$("tr").last().removeClass("tr-style");
			$($(".shop-Name")[i]).html(obj[i].goodsName);
			$($(".D-price")[i]).html(obj[i].goodsPrice);
			$($(".num-input")[i]).val(obj[i].goodsCount);
			allPrice(obj);
			//增减商品
			$(".min-btn")[i].onclick=function(){	//减
				let utNum=parseInt($(".num-input")[i].value);
					if(utNum>0){
						utNum--;
						$(".num-input")[i].value=utNum;
						allPrice(obj)
					$.ajax({
						type:"get",
						url:"php/updateGoodsCount.php",
						data:{vipName:$(".username").html(),goodsId:obj[i].goodsId,goodsCount:$(".num-input")[i].value},
						success:function(){
							console.log("ok")
							}	
						})
					}
				}
			$(".max-btn")[i].onclick=function(){	//加
				let utNum=parseInt($(".num-input")[i].value);
					if(utNum<99){
						utNum++;
						$(".num-input")[i].value=utNum;
						allPrice(obj)
						$.ajax({
						type:"get",
						url:"php/updateGoodsCount.php",
						data:{vipName:$(".username").html(),goodsId:obj[i].goodsId,goodsCount:$(".num-input")[i].value},
						success:function(){
							console.log("ok")
							}	
						})
					}
				}
			$(".num-input")[i].onkeyup=function(){
				let utNum=parseInt($(".num-input")[i].value);
				if(utNum<99){
					allPrice(obj)
					}
				}
				
			
		$(".num-input")[i].onblur=function(){		//数字失去焦点
			let utNum=parseInt($(".num-input")[i].value);
			if(utNum<99){
					$.ajax({
						type:"get",
						url:"php/updateGoodsCount.php",
						data:{vipName:$(".username").html(),goodsId:obj[i].goodsId,goodsCount:$(".num-input")[i].value},
						success:function(){
							console.log("update-ok")
							}	
						})
					}
			}
		$(".deleteshop")[i].onclick=function(){		//删除商品
				$.ajax({			//后台删除
						type:"get",
						url:"php/deleteGoods.php",
						data:{vipName:$(".username").html(),goodsId:obj[i].goodsId},
						success:function(){
							console.log("delete-ok")
							}	
						})
								//页面删除
				$($(".addTrbox")[i]).fadeOut(400,function(){
					$(this)[i].style.display="none";
					})
				}
		}
			function allPrice(obj){
				var allprice=0;			//所有商品价格总计
				var money=0;			//单种商品价格总计
				for(let i in obj){
					let utNum=parseInt($($(".num-input")[i]).val());	//单种商品数量
					let utPrice=Number($($(".D-price")[i]).html())	//该商品单价
					money=utNum*utPrice;
					$($(".D-Allprice")[i]).html(money);
					allprice+=money
				}
				$(".sum-price").html(allprice)
			}
		}
	$(function(){
		$("#logoA").click(function(){
			var date=new Date(); 			//删除shopId	
	  		date.setTime(date.getTime()-10000); 
	 		document.cookie=cookieJson["shop-id"]+"=s; expires="+date.toGMTString()+";path="+"/";//如果给cookie设置了path，删除也要设置同样的格式
		})
		$.ajax({
			type:"get",
			url:"php/getShoppingCart.php",
			data:{vipName:$(".username").html()},
			dataType:"json",
			success:function(obj){
				console.log(obj)
				showshopcar(obj);
			}
		})
	})
