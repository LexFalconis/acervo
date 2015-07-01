CREATE TABLE `banners` (
  `id` int(11) NOT NULL auto_increment,
  `nome` varchar(255) NOT NULL default '',
  `link` varchar(255) NOT NULL default '',
  `click` int(11) NOT NULL default '0',
  `urlimg` varchar(255) NOT NULL default '',
  PRIMARY KEY  (`id`)
) TYPE=MyISAM;




INSERT INTO banners (nome, link, click, urlimg) VALUES ('Facebook', 'https://www.facebook.com/Princess.ofchrist.jesus', '0', 'http://localhost/princessredes/img/placafacebook.png');

SELECT * FROM banners;