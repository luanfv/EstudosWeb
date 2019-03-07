<?php
	include("home.php");

	if(isset($_REQUEST['pag'])){
		$pagina = $_REQUEST['pag'];
	}
	else{
		$pagina = 'pag1';
	}

	include($pagina . '.php');
?>