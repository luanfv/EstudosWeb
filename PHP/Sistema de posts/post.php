<?php 
	session_start();

	if($_SESSION['logado'] != 'sim')
		include('deslogado.php'); 

	$post = array('titulo' => $_REQUEST['titulo'], 
		'descricao' => $_REQUEST['descricao']);

	include('funcoes.php');
	
	add_post($post);

	header('location: home.php');
?>

