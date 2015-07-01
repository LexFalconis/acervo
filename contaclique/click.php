<?php
$conn = mysql_connect("localhost","root",""); // conexão com o banco de dados
 mysql_select_db("bancodedados",$conn);

 $query = mysql_query("UPDATE banners SET click = click + 1 WHERE id=" . $_GET['id']);
 echo mysql_error();
 header("Location: " . $_GET['link']); // retorna o lick do banco de dados
?>
