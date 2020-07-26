/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 8.0.17 : Database - bai_blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bai_blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `bai_blog`;

/*Table structure for table `article_list` */

DROP TABLE IF EXISTS `article_list`;

CREATE TABLE `article_list` (
  `id` int(10) NOT NULL,
  `title` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `categroy` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `idd` FOREIGN KEY (`id`) REFERENCES `category_list` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `article_list` */

insert  into `article_list`(`id`,`title`,`content`,`categroy`) values 
(1,'如何发财','01兼职赚钱\r\n\r\n工作努力是应该做的，同时可以积攒很多的经验与能力，除了利用工作赚钱之外。还可以在利用工作技能赚钱，就是“接私活”。相信很多人都知道或是利用这个技能赚钱。\r\n\r\n\r\n\r\n正好身边有个朋友是互联网公司的主管。月入10000左右，下班之后开始做各种兼职，六点下班，晚上8点之前正式投入工作，一直工作的晚上11点左右，周末一天的时间用来工作，一天时间用了休息。\r\n\r\n工作五年，凭自己的能力在生活的城市买了房，现在已经装修好入住了。\r\n\r\n02凭个人特长赚钱\r\n\r\n有个学弟，毕业两年了，除了工作之余，他擅长做PPT，会在某直播网站上和大家分享一些技巧。\r\n\r\n当然做直播也是有钱拿的，我偷偷打听了下，他们直播的薪酬主要分成两个方面，第一是时薪，每天固定直播时长，然后拿固定的底薪；第二是礼物提成，有人送礼物，你可以把礼物变成现金。\r\n\r\n这个学弟之前自己在一家小平台做直播，几乎没收入。熟悉流程后，他找到了一家传媒公司，签了合同。之后工会给了他网站的邀请码，他注册填写资料，成为了其中的一员。\r\n\r\n\r\n\r\n并不是专职做主播的，每周可能直播3、4次，人气也不高，但好在他赶上了直播的第一轮红利期，扣除各项费用后，每月能有3000+的额外收入。\r\n\r\n03自媒体运营\r\n\r\n现在是个技能很好变现的时代，就算没什么技能，也可以努力开发一些。\r\n\r\n近几年大火的自媒体，只要你文字写的好，就要赚钱。基本每个公司都需要从事内容工作的人员。渠道有很多，比如今日头条、百度百家、微信公众号、一点号等，找到合适的平台和定位，想办法经营推广，还是可以赚到一些外快的。\r\n\r\n\r\n\r\n只有自己努力，每个月赚取生活费还是很有可能的。现在一个有运营经验的自媒体人员，月工资都在6000以上。\r\n\r\n04投资理财\r\n\r\n有人因为投资理财一夜暴富，也有人赔的满盘皆输。但是大多数人还是可以赚钱获得收益，差距在于年化收益是多少了。\r\n\r\n有人朋友是个投资理财高手。对当下各种理财了如指掌，互联网金融类、银行理财，什么样的产品收益高，安全性稳定，他都知道。\r\n\r\n前段时间见面的时候，让他帮忙推荐一下理财产品\r\n\r\n他最近一年在投资汽车众筹类，年化收益超过20%，60天内回款，有实体车行运营，安全系数高，既享受到高收益又投资灵活，可以根据自己是投资计划，来随时调整投资的时间。\r\n\r\n\r\n\r\n他说钱车网汽车众筹投资理财这个平台，适合我们这些正在奋斗的人。他一个月的投资，差不多可以赶上一个刚毕业的学生的收入。\r\n\r\n05自我努力\r\n\r\n喜欢购物，买东西的，可以研究下淘宝联盟、网易推手、路口等赚取佣金的平台。\r\n\r\n有特长的，可以售卖课程，在微信、千聊、网易云课堂等平台和其他人分享自己的技能。\r\n\r\n再不能的，也可以自己做点小生意。\r\n\r\n\r\n\r\n赚钱的方法永远都不缺，主要看自己是否愿意去尝试。或许这些只是一些短期的赚钱方法，但只有先积累起本金，之后才有更多可能赚钱额外利润',1),
(2,'文章','《文章》包括各种文体的著作、作品，如诗歌、戏剧、小说、科学论文，记叙文、议论文、说明文、应用文等等。“千古文章未尽才”“文章千古事”“文章憎命达”“板凳要坐十年冷、文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。',1);

/*Table structure for table `category_list` */

DROP TABLE IF EXISTS `category_list`;

CREATE TABLE `category_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `category_list` */

insert  into `category_list`(`id`,`name`) values 
(1,'前端'),
(2,'JAVA');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '姓名',
  `password` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码',
  `real_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '昵称',
  `portrait` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机',
  `user_sign` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '个性签名',
  `delete_flag` tinyint(4) DEFAULT '0' COMMENT '0可用1封禁',
  `remark` varchar(600) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `user` */

insert  into `user`(`user_id`,`username`,`password`,`real_name`,`portrait`,`mobile`,`user_sign`,`delete_flag`,`remark`) values 
(1,'admin','123456','白先生','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3324742340,3723572723&fm=26&gp=0.jpg','17770713045','白先生想发财',0,'没有噢噢噢噢'),
(11,'admin1','123456',NULL,NULL,NULL,NULL,0,NULL),
(12,'admin1sd','123456',NULL,NULL,NULL,NULL,0,NULL),
(13,'admina','123456',NULL,NULL,NULL,NULL,0,NULL),
(14,'adminn','123456',NULL,NULL,NULL,NULL,0,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
