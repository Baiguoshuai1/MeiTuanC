<?php
	header("Content-type:text/html; charset=utf-8");
	
	$name=$_POST["username"];
	$con=mysql_connect("localhost","root","root");//搭桥
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("meituan",$con);		//过桥查库
		//1)、查询
		$sqlstr="select * from person where username='$name'";//找表
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		mysql_close($con);				//拆桥 关闭数据库
		if($rows<=0){		
			//2）、添加	
				echo "ok";//失去焦点的时候，判断username
			}else{
				echo "no";//服务器错误
			}
		}

?>