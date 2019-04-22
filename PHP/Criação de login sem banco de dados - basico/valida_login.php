<?php

	$login = null;
	$senha = null;

	if(isset($_REQUEST['login']) && isset($_REQUEST['senha'])){
		$login = $_REQUEST['login'];
		$senha = $_REQUEST['senha'];
	}

	if($login == 'loginshow' && $senha == '123'){
		include('logado.php');
	}
	else{
		include('erro_login.php');

		include('sair.php');
	}

?>