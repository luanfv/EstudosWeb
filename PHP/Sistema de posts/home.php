<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<link rel="stylesheet" type="text/css" href="css\home.css">
			<title>
				Home
			</title>
		</head>

<?php

	session_start();
	include('funcoes.php');
	menu();
	mostrar_posts();
	rodape();
?>
