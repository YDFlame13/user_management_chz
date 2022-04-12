# Host: localhost  (Version: 5.7.26)
# Date: 2022-04-12 09:15:36
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

INSERT INTO `admin` VALUES (4,'wws','wws','abc@qq.com','2001-06-22');

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

INSERT INTO `admin_token` VALUES (1,4,'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Iiwic3ViIjoid3dzIiwiaXNzIjoid2VianNjaHoiLCJpYXQiOjE2NDk2OTY1MjcsImV4cCI6MTY0OTk1NTcyN30.bsJ2Tqz921wNWtfWuoeTLeBXh2veXj5W2MLksxMccx4',1649696527121);

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "students"
#

INSERT INTO `students` VALUES (1,'张三','123','abc@qq.cn','2001-05-01',400.45),(2,'李四','123','abc@qq.cn','2001-05-02',420.45);
