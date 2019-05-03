<!DOCTYPE html>
<html>
<head>
	<title>
		
	</title>

	<style>
		#inicio{
			top: 2px;
			float: left;
			position: absolute;
		}
	</style>
</head>
<body>
	<a href="index.php" id="inicio">Inicio</a>
	<br>
	
</body>
</html>

<?php

	include('funcoes.php');

	$post = array('titulo' => $_REQUEST['titulo'], 
		'descricao' => $_REQUEST['descricao']);
	
	add_post($post);
	mostrar_posts();

?>