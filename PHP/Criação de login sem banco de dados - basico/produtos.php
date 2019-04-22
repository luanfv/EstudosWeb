<?php

	$nome = null;
	$quantidade = 0;

	if(isset($_REQUEST['nome']) && isset($_REQUEST['quantidade'])){
		$nome = $_REQUEST['nome'];
		$quantidade = $_REQUEST['quantidade'];
	}

?>