<?php

	function verifica_conta(){
		$login = null;
		$senha = null;

		if(isset($_REQUEST['login']) && isset($_REQUEST['senha'])){
			$login = $_REQUEST['login'];
			$senha = $_REQUEST['senha'];
		}

		include('contas.php');

		for($i = 0; $i < count($usuarios); $i++){

			if($login == $usuarios[$i]['login'] && $senha == $usuarios[$i]['senha']){
				
				session_start();

				return "logado.php";
			}

		}

		return "erro_login.php";
	}

	include(verifica_conta());

?>