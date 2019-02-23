<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Array
	</title>
</head>
<body>
	<?php
		//Declarando array
		$frutas = array('Abacaate', 'Laranja', 'Banana');

		//Mostrando na tela a array
		print_r($frutas);

		echo '<br>';

		//Adicionando mais variaveis na array
		$frutas[] = 'Melancia';

		print_r($frutas);

		echo '<br>';

		//Fazendo trocas de posição na array
		$aux = $frutas[1];
		$frutas[1] = $frutas[3];
		$frutas[3] = $aux;

		print_r($frutas);

		echo '<br>';


		//Declara array de forma personalizada
		$cores = array('a' => 'Azul', 'v' => 'Vermelho', 'l' => 'Laranja', 'r' => 'Roxo');
		print_r($cores);
		echo '<br>';

		//Mostra na tela apenas um endereço da array
		echo $cores['l'];
		echo '<br>';

		//Troca variaveis da array
		$cores['r'] = 'Rosa';
		echo $cores['r'];
		echo '<br>';

		//Adiciona outra variavel na array
		$cores['p'] = 'preto';

		//<pre> mostra na tela a array de forma mais organizada
		echo "<pre>";
		print_r($cores);
		echo '<br>';
		echo "</pre>";
	?>

</body>
</html>