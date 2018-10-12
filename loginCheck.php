<?php
header("Content-type:text/html;charset=utf-8");
	//一、接收数据
	$username=$_POST['username'];
	$userpass=$_POST['userpass'];

	//二、处理（连接数据库，保存数据）
	$con=mysql_connect("localhost","root","root");//1.连接数据库
	if(!$con){
		echo"数据库连接失败";
	}else{
		mysql_select_db("meituan",$con);	//2.通过桥选择数据库
		
		$sqlstr="select*from person where username='$username' and userpass='$userpass'";
		//echo"$sqlstr";
		$result=mysql_query($sqlstr,$con);	//3.通过桥执行语句(获取到要查询的数据)
		//echo"$result";
		mysql_close($con);					//4.关闭数据库
	//三、响应
		$rows=mysql_num_rows($result);
		
		if($rows==0){
			echo "err";
		}else{
			echo $username;
		}
		
			
	}




?>