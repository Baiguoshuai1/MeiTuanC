<?php
	header("Content-type:text/html; charset=utf-8");
	
	$name=$_POST["username"];
	$userpass=$_POST["userpass"];
	
 
	
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("meituan",$con);
		//1)、查询
		$sqlstr="select * from person where username='$name'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){		
			//2）、添加
			$sqlstr2="insert into person values('$name','$userpass')";
			$result = mysql_query($sqlstr2,$con);
			mysql_close($con);
			if($result==1){
				echo "1";//注册成功；
			}else{
				echo "0";//服务器错误
			}
		}
	}
?>