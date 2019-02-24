<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Array multiplo
	</title>
</head>
<body>
	<?php

		$pessoa['nome'] = array('João', 'Maria', 'Eliza', 'Carlow');
		//Declarando array dentro de array
		$pessoa['nome']['idade'] = [18, 18, 7, 40];

		echo '<pre>';
		print_r($pessoa);
		
		//Pesquisando dentro da primeira array
		echo $pessoa['nome'][1];
		
		//Pesquisando dentro da array dentro da primeira
		echo '<br>' . $pessoa['nome']['idade'][1];
		echo '<hr>';

		//Declarando arrays com o mesmo nome de variavel
		$pessoa['nome'] = array('João', 'Maria', 'Eliza', 'Carlow');
		$pessoa['idade'] = array(18, 18, 7, 40);

		
		print_r($pessoa);

		//Mostrando cordenadas de array
		echo '<br>' . $pessoa['nome'][3];
		echo '<br>' .$pessoa['idade'][3];
		
	?>

</body>
</html>