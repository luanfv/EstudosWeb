<?php

	$usuarios = array(
		array('login' => 'loginshow' , 'senha' => '123'),
		array('login' => 'agua' , 'senha' => 'pedra'),
		array('login' => 'teste' , 'senha' => '321')
	);

	$logou = false;
	$login = null;
	$senha = null;

	
	if(isset($_REQUEST['login']) && isset($_REQUEST['senha'])){
		$login = $_REQUEST['login'];
		$senha = $_REQUEST['senha'];
	}

	for($i = 0; $i < count($usuarios); $i++){
		if($login == $usuarios[$i]['login'] && $senha == $usuarios[$i]['senha']){
			include('logado.php');
			$logou = true;
		}
	}

	/*
	AMBOS "FOR" FUNCIONA!! UTILIZEI O OUTRO PQ ME COMPREENDO MELHOR, SENDO ASSIM, QUANDO PRECISAR TIRAR DUVIDAS SERA MAIS FACIL

	foreach ($usuarios as $usuarios) {
		if($login == $usuarios['login'] && $senha == $usuarios['senha']){
			include('logado.php');
			$logou = true;
		}
	}
	*/

	if($logou == false){
		include('erro_login.php');
	}
	

?>