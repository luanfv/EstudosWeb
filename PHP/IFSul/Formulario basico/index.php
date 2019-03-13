<?php
	include("home.php");
	if(isset($_REQUEST['pag'])){
		if(($_REQUEST['pag']) == 'pag2' || ($_REQUEST['pag']) == 'pag3')
			$pagina = $_REQUEST['pag'];
		else
			$pagina = 'pag1';
	}
	else{
		$pagina = 'pag1';
	}
	include($pagina . '.php');
?>