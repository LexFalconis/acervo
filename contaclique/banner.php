<?php
$conexao = mysql_connect("localhost","user","senha"); // conexão com o banco deif(!$conexao)
die("Nao foi possivel conectar no servidor MySQL. Erro: " . mysql_error());
mysql_select_db($db) or die("Nao foi possivel usar o banco de dados. Erro: " . mysql_error());

$sql = "SELECT * FROM banners  ORDER BY id LIMIT 1 RAND() ";
$query = mysql_query($sql);
while ($x = mysql_fetch_array($query)) {
?>
<a href="click.php?id=<?=$x[id]?>&link=<?=$x[link]?>"><img  src="<?=$x[urlimg]?>"  alt="<?=$x[nome]?>"></a>
<?
}
?>