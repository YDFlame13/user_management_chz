# Host: localhost  (Version: 5.7.26)
# Date: 2022-04-13 14:34:58
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

INSERT INTO `admin` VALUES (1,'root1','root1','abc@123.cn','2000-05-05');

#
# Structure for table "admin_token"
#

DROP TABLE IF EXISTS `admin_token`;
CREATE TABLE `admin_token` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `adminid` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `buildtime` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Data for table "admin_token"
#

INSERT INTO `admin_token` VALUES (1,1,'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoicm9vdDEiLCJpc3MiOiJ3ZWJqc2NoeiIsImlhdCI6MTY0OTgzMDc0OCwiZXhwIjoxNjUwMDg5OTQ4fQ.Ia1dZ5ht_gc1UTiBDYee_0LzA6sk_cX_UmUQY0tLoEc',1649830748948);

#
# Structure for table "students"
#

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `balance` float DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

#
# Data for table "students"
#

INSERT INTO `students` VALUES (1,'aa0','123','abc.qq.com','2002-05-11',222.55),(2,'aa1','123','abc.qq.com','2002-05-11',325),(3,'aa2','123','abc.qq.com','2002-05-11',325),(4,'aa3','123','abc.qq.com','2002-05-11',325),(5,'aa4','123','abc.qq.com','2002-05-11',500),(6,'aa5','123','abc.qq.com','2002-05-11',325),(7,'aa6','123','abc.qq.com','2002-05-11',325),(8,'aa7','123456','abc.qq.com','2002-05-11',325),(9,'aa8','123','abc.qq.com','2002-05-11',325),(10,'aa9','123','abc.qq.com','2002-05-11',325),(11,'bb0','123','abc.qq.com','2002-05-11',325),(12,'bb1','123','abc.qq.com','2002-05-11',325),(13,'bb2','123','abc.qq.com','2002-05-11',325),(14,'bb3','123','abc.qq.com','2002-05-11',325),(15,'bb4','123','abc.qq.com','2002-05-11',325),(16,'bb5','123','abc.qq.com','2002-05-11',325),(17,'bb6','123','abc.qq.com','2002-05-11',325),(18,'bb7','123','abc.qq.com','2002-05-11',325),(19,'bb8','123','abc.qq.com','2002-05-11',325),(20,'bb9','123','abc.qq.com','2002-05-11',325),(21,'cc0','123','abc.qq.com','2002-05-11',325),(22,'cc1','123','abc.qq.com','2002-05-11',325),(23,'cc2','123','abc.qq.com','2002-05-11',325),(24,'cc3','123','abc.qq.com','2002-05-11',325),(25,'cc4','123','abc.qq.com','2002-05-11',325),(26,'cc5','123','abc.qq.com','2002-05-11',325),(27,'cc6','123','abc.qq.com','2002-05-11',325),(28,'cc7','123','abc.qq.com','2002-05-11',325),(29,'cc8','123','abc.qq.com','2002-05-11',325),(30,'cc9','123','abc.qq.com','2002-05-11',325),(31,'dd0','123','abc.qq.com','2002-05-11',325),(32,'dd1','123','abc.qq.com','2002-05-11',325),(33,'dd2','123','abc.qq.com','2002-05-11',325),(34,'dd','123','abc.qq.com','2002-05-11',325),(35,'dd3','123','abc.qq.com','2002-05-11',325),(36,'dd4','123','abc.qq.com','2002-05-11',325),(37,'dd5','123','abc.qq.com','2002-05-11',325),(38,'dd6','123','abc.qq.com','2002-05-11',325),(39,'dd7','123','abc.qq.com','2002-05-11',325),(40,'dd8','123','abc.qq.com','2002-05-11',325),(41,'dd9','123','abc.qq.com','2002-05-11',325),(42,'ee0','123','abc.qq.com','2002-05-11',325),(43,'ee1','123','abc.qq.com','2002-05-11',325),(44,'ee2','123','abc.qq.com','2002-05-11',325),(45,'ee3','123','abc.qq.com','2002-05-11',325),(46,'ee4','123','abc.qq.com','2002-05-11',325),(47,'ee5','123','abc.qq.com','2002-05-11',325),(48,'ee6','123','abc.qq.com','2002-05-11',325),(49,'ee7','123','abc.qq.com','2002-05-11',325),(50,'ee8','123','abc.qq.com','2002-05-11',325),(51,'ee9','123','abc.qq.com','2002-05-11',325);
