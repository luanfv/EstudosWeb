<?php 

	session_start();

	include('sair.php');
	
	if($_SESSION['logado'] != 'sim')
		include('deslogado.php'); 


	$post = array(
		array('titulo' => $_REQUEST['titulo'], 
			'descricao' => $_REQUEST['descricao'])
	);

?>

<!DOCTYPE html>
<html>
<head>
	<title>
		
	</title>
</head>
<body>
	<a href="index.php">Inicio</a>
	
	<h2>
		<?php echo $post[0]['titulo'] ?>
	</h2>
	<p>
		<?php echo $post[0]['descricao'] ?>
	</p>


</body>
</html>

