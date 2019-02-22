<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Funções numericas
	</title>
</head>
<body>
	<?php
		$numero = 7.5;

		//Arredonda para cima
		echo ceil($numero) . '<br>';

		//Arredonda para baixo
		echo floor($numero) . '<br>';

		//Arredonda para cima se o numero apos a virgula for maior ou igual a 5
		// e para baixo se for menor que 5
		echo round($numero) . '<br>';

		//Gera numero aleatorio
		echo rand(1 , 10) . '<br>';
		
		//Raiz quadrada
		echo sqrt($numero);

	?>


</body>
</html>