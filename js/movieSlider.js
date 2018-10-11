let count=0;
		let myTimer=null;
function showImg(inOrd,outOrd){
		var ulDoms=$(".four-sliderBox ul");
		ulDoms[0].style.left=0;
		
		if(inOrd==outOrd){									//注意!!!一定要判断，判断一开始进出元素序号相等的情况
			return;
		}
		ulDoms[inOrd].style.left=1200+"px";
		ulDoms[outOrd].style.left=0;
		moveObj03(ulDoms[inOrd],"left",0,200);
		moveObj03(ulDoms[outOrd],"left",-1200,200);
		
	}
function changeImg(){
		//let ulDoms=("ul")
	myTimer=setInterval(function(){
		let outOrd=count;
			count++;
		if(count>ulDoms.length-1){							//判断序号（下标）循环
			count=0;
		}
			
			showImg(count,outOrd);
		},3000)
}	
//function stopChange(){
//		$("ulBox").onmouseover=()=>{
//		clearInterval(myTimer);
//		}
//		$("ulBox").onmouseout=()=>{
//		changeImg();
//		}
//
//}	