<?php 

	$n1 = '';
	$n2 = '';
	$soma = '';
	$resultado = '';


	if(isset($_REQUEST['n1']) && isset($_REQUEST['n2'])){
		$n1 = $_REQUEST['n1'];
		$n2 = $_REQUEST['n2'];

		if(isset($_REQUEST['soma'])){
			$resultado = $n1 + $n2;
		}

		else if(isset($_REQUEST['sub'])){
			$resultado = $n1 - $n2;
		}

		else if(isset($_REQUEST['divisao'])){
			$resultado = $n1 / $n2;
		}

		else if(isset($_REQUEST['mult'])){
			$resultado = $n1 * $n2;
		}
	}


?>