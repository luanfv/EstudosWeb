<?php

	$_SESSION['logado'] = 'nao';
	session_destroy();
	header("location: home.php");

?>