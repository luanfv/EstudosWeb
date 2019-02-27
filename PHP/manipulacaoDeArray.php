<?php
	echo '<pre>';
	$cores = ['a' => 'Amarelo', 'v' => 'Verde', 'p' => 'Preto', 'r' => 'Roxo'];
	print_r($cores);

	//Verifica se a variavel é array
	is_array($cores);

	//Mostra a posição das variaveis
	$cores = array_keys($cores);
	print_r($cores);


	$lista = ['Vide-game', 'TV', 'Radio', 'Sofa', 'Mesa'];

	//Mostra quantas variaveis existem dentro da array
	echo '<br>' . count($lista) . '<br>';
	print_r($lista);
	echo '<br>';

	//Ordena o array por ordem alfabetica
	sort($lista);
	print_r($lista);

	$lista = ['Vide-game', 'TV', 'Radio', 'Sofa', 'Mesa'];

	//Ordena o array em ordem alfabetica, mas não troca suas posições
	asort($lista);
	print_r($lista);

	//Junta dois ou mais array's
	$juncao = array_merge($lista, $cores);
	print_r($juncao);

	//EXPLODE - quebra a String em um array com a condição passada
	$data = '27/02/2019';
	echo '<br>' . $data . '<br>';
	$arrayData = explode('/', $data);
	print_r($arrayData);

	//IMPLODE - junta uma String em um array
	$arrayData = implode(' - ', $arrayData);
	echo '<br>' . $arrayData;
?>
