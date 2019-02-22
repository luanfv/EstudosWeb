<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Controle de String
	</title>
</head>
<body>
	<?php
		$texto = 'o PHP e legal';
		echo $texto;
		echo '<hr>';

		//Deixa toda String em minusculo
		echo strtolower($texto);
		echo '<hr>';

		//Deixa toda String em maiuscula
		echo strtoupper($texto);
		echo '<hr>';

		//Deixa a primeira palavra da String em maiuscula
		echo ucfirst($texto);
		echo '<hr>';

		//Mostra o número de char que possui na String (espaços em brancos também contam)
		//Letrasa com acentuação contam como duas char 
		echo strlen($texto);
		echo '<hr>';

		//Altera letras
		echo str_replace('e', 'u', $texto);
		echo '<hr>';

		//Demonstra os parametros de uma String
		echo substr($texto, 8, 13);
	?>


</body>
</html>