
//项目中有哪些类：轮播图
function Slider(
				boxDomObj,width,height,imgs,
				doudouWidth,doudouHeight,doudouColor,doudouHighColor,
				isCircle,PointerToggle,direction,timeSpace){
	this.boxDomObj = boxDomObj;//轮播图的容器
	this.imgDoms = [];//存储所有的img标签,DOM对象
	this.liDoms = [];//存储所有的li标签,DOM对象
	this.PointerDivDoms=[];
	this.iDoms=[];
	this.width = width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.doudouWidth = doudouWidth;
	this.doudouHeight = doudouHeight;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;
	
	this.direction = direction;//左还是右
	this.PointerToggle=PointerToggle;
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.PointerCount=0
	
	
	this.createUI();
	this.addEvent();
	this.changeImg();
	
}

Slider.prototype.createUI= function(){
	this.boxDomObj.style.position = "relative";
	//this.boxDomObj.style.overflow = "hidden";	
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;cursor: pointer;";
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
//		if(i==0){
//			imgDom.style.opacity = 1;		
//		}else{
//			imgDom.style.opacity = 0;
//		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
				if(i!==0){
			$(this.imgDoms[i]).fadeOut(0);		//!!!jquery的fadeIn只能把fadeOut的对象显示出来，不能把opacity为0的对象显示出来
		}
}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;bottom:10px;left:230px;list-style:none;z-index:2;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for(let i=0;i<this.imgs.length;i++){
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:10px;";
		liDom.style.width = this.doudouWidth+"px";
		liDom.style.height = this.doudouHeight+"px";
		if(i==0){
			liDom.style.backgroundColor = this.doudouHighColor;
		}else{
			liDom.style.backgroundColor = this.doudouColor;
		}
		if(this.isCircle){
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
	//3.创建按钮
	if(this.PointerToggle){
		for(let i=0;i<2;i++){
			let PointerDivDom=document.createElement("div")	//创建按钮盒子		
			PointerDivDom.style.cssText="position:absolute;display:flex;z-index:2;width:38px;height:38px;top:101px;background-color:#444;border-radius:50%;opacity: .8;cursor: pointer;"
			//PointerDivDom.style.display="none";
			this.boxDomObj.appendChild(PointerDivDom);		//添加到轮播图的盒子里
			this.PointerDivDoms.push(PointerDivDom);       //push到按钮盒子数组里
			
			let iDom=document.createElement("i");			//创建按钮图标
			iDom.style.cssText="color:#fff;font-size:19px;font-weight:800;margin: auto;"
			$(iDom).addClass("iconfont");					//给两个按钮添加一个calss类 iconfont,为了获取到按钮图标
			PointerDivDom.appendChild(iDom);				//添加到按钮盒子里
			this.iDoms.push(iDom);							//push到按钮图标的数组里
		}
			this.PointerDivDoms[0].style.left="12px";		//设置每个按钮的位置
			this.PointerDivDoms[1].style.right="12px";
			$(this.PointerDivDoms[0]).fadeOut(0);			//轮播图左右按钮一开始隐藏
			$(this.PointerDivDoms[1]).fadeOut(0);
		
			$(this.boxDomObj).hover(()=>{	//箭头函数 不转移this	
				this.PointerCount++;
				if(this.PointerCount>1){
					$(this.PointerDivDoms[0]).stop();			//防止鼠标移出后多次触发之前没有发生完事件
					$(this.PointerDivDoms[1]).stop()
				}
				$(this.PointerDivDoms[0]).fadeToggle(200);	//显示盒子显示按钮
				$(this.PointerDivDoms[1]).fadeToggle(200);
			})
			
			$(this.iDoms[0]).html("&#xe63c;")				//给i添加图标的名字
			$(this.iDoms[1]).html("&#xe63b;")
	}
}

Slider.prototype.showImg = function(inOrd,outOrd){
	if(inOrd==outOrd){
		return;
	}
	
	//1)、滑入滑出前的准备工作
	//this.imgDoms[inOrd].style.opacity = 1
	//2）、滑入滑出效果
	//moveObj05(this.imgDoms[inOrd],"opacity",1,300);
	//moveObj05(this.imgDoms[outOrd],"opacity",0,300);
	$(this.imgDoms[outOrd]).fadeOut(500);
	$(this.imgDoms[inOrd]).fadeIn(500);
	
	//;
}


Slider.prototype.showLi=function(){
	//    B、改豆豆		
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].style.backgroundColor = this.doudouColor;
	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

//1、自动播放图片
Slider.prototype.changeImg=function(){
	
	this.myTimer = setInterval(()=>{
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>this.imgs.length-1){
			this.currOrd=0;
		}
		
		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();

	},this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
	if(transOrd<0){
		transOrd=this.imgDoms.length-1;
	}else if(transOrd>this.imgDoms.length-1){
		transOrd=0;
	}
	
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;
	//2）、外观：
	//A、改图片
	this.showImg(this.currOrd,outOrd);
	//B、改豆豆
	this.showLi();
}
var arr=["../第一阶段/白国帅 机试/pc端/index.html","../第一阶段/作业/麦田国际/index.html","../第一阶段/作业/考试/index.html","../第一阶段/作业/支付宝/支index.html","../../第一阶段/作业/QQ作业 白国帅/index.html"]
Slider.prototype.goURL=function(i){
	location.href=arr[i];
}
Slider.prototype.addEvent = function(){	
	let obj = this;//this是Slider的对象
	this.boxDomObj.onmouseover = function(){
		obj.stopChange();
	}
	this.boxDomObj.onmouseout = function(){
		obj.changeImg();
	}
	
	for(let i=0;i<this.liDoms.length;i++){
	//	this.liDoms[i].onmouseover = ()=>{
		//	this.goImg(i);
		//}
		$(this.liDoms[i]).mouseover(()=>	{
			this.goImg(i);
		})
		$(this.imgDoms[i]).click(()=>{
			this.goURL(i);
		})

	}
		$(this.PointerDivDoms[0]).click(()=>{
			this.goImg(this.currOrd-1);
		})
		$(this.PointerDivDoms[1]).click(()=>{
			this.goImg(this.currOrd+1);
		})

}








