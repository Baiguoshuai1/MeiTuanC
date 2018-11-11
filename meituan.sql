# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-22 10:52:28
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('001','草莓蛋糕','甜点',80,20,'红里透白','../img/cake/84c7aabce790c8a3497e0629ea05f674292062.png','心形','奶油加巧克力','','34','150','草莓蛋糕','','','1','8英寸','','',''),('002','巧克力蛋糕','甜点',106,42,'小麦色','../img/cake/79427b3fb05a12420af87c38e7018afc294738.png','圆形','纯巧克力','','56','190','巧克力蛋糕','','','1','12英寸','','',''),('003','黄桃夹心蛋糕','甜食',99,12,'黄色','../img/cake/d592bb6a05fe71c6430fbf4f00ba16d559239.jpg','方形','水果蛋糕','入口软，香','122','186','黄桃夹心蛋糕','','','1','10英寸','','',''),('004','大大蛋糕','甜食',126,62,'酥酥软软','../img/cake/7469f3c30c2c6d64673aa16922b670b8424599.png','圆形','奶油加巧克力','入口软软的，香','22','210','大大蛋糕','','','1','6英寸','','',''),('005','纯乳脂抹茶千层蛋糕1个，约8英寸，圆形','甜食',88,36,'酥酥软软','../img/cake/974cddb3d8186261732907940558ce3f176440.jpg','圆形','奶油加巧克力','入口软软的，香','55','170','纯乳脂抹茶千层蛋糕1个，约8英寸，圆形','','','1','8英寸','','',''),('006','榴莲千层蛋糕1份','甜食',56,22,'酥酥软软','../img/cake/c5f0f0f34fa59c3178fe31c8584c665f367902.png','圆形','榴莲味','入口软软的，更香','66','110','榴莲千层蛋糕1份','','','1','12英寸','','',''),('007','慕斯系列（3选1），约2磅重','3选1',66,42,'酥酥软软','../img/cake/d3da3d7011ff613011c069d0e62bf884174292.png','方形','榴莲味','入口软软的，更香','54','135','慕斯','37度爱','果粒全开','3','8英寸','12英寸','10英寸',''),('008','帅帅蛋糕系列（2选1）','2选1',188,66,'酥酥软软','../img/cake/1933.jpg_wh300.jpg','圆形','榴莲味','入口软软的，更香','21','299','帅帅蛋糕','芳心依旧','','2','10英寸','8英寸','',''),('009','稀奶油水果蛋糕系列（3选1）','3选1',114,39,'酥酥软软','../img/cake/1993.jpg_wh300.jpg','圆形','奶油加巧克力','入口软软的，更香','32','206','稀奶油水果','水果礼盒','蓝莓格调','3','6英寸','10英寸','12英寸','8英寸'),('010','超级水果蛋糕','甜食',198,12,'酥酥软软','../img/cake/th.jpg','圆形','奶油加巧克力加水果','入口软软的，更香','65','310','超级水果蛋糕','','','1','10英寸','','','');

#
# Structure for table "person"
#

CREATE TABLE `person` (
  `username` varchar(10) NOT NULL,
  `userpass` varchar(15) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "person"
#

INSERT INTO `person` VALUES ('',''),('aa','112233'),('Bai','qwe123123'),('bbb','123456'),('bbb22','123456'),('ee','112233'),('vv','123123'),('yaya','112233'),('yaya1','123123'),('yiyi','112233'),('你好啊','bgs09143010'),('你好啊2','123123'),('啊啊啊啊','zxcvbn'),('宝贝','zxcvbnzxcvbn'),('帅帅','bgs09143010'),('滴滴答答的订单','zxcvbn');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('帅帅','008',1),('bbb','009',2),('bbb','004',3),('bbb','002',3),('帅帅','002',1),('帅帅','001',2);
