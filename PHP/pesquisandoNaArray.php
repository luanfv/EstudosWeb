<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Pesquisando em array
	</title>
</head>
<body>
	<?php

		$nomes = ['Joao', 'Luan', 'Carlow', 'Eliza'];
		$idades = [21, 18, 26, 15];

		//Aparece 1 se achar e nada se não existir (true/falso)
		echo in_array(26, $idades);

		//Aparece a posição se for se achar e nada se não existir (mas o programa entende a posição se achar e 0 se não achar)
		echo '<br>' . array_search(26, $idades);


		echo '<hr>';


		//Forma de mostrar na tela o array pesquisado
		$posicao = array_search('Luan', $nomes);

		echo $nomes[$posicao];


		echo '<hr>';


		$pesquisa = 'Carlow';

		$info = [1 => $nomes, 2 => $idades];

		//Pesquisando em array multiplas
		if(in_array($pesquisa, $nomes)){
			echo $info[1][array_search($pesquisa, $nomes)];
		}


		echo '<hr>';


		$pesquisa = 'Eliza';

		//Pesquisando todas variaveis de todas array's daquela posição
		if(in_array($pesquisa, $nomes)){
			$pesquisando = array_search($pesquisa, $nomes);
			for($i = 1; $i < 3; $i++)
				echo $info[$i][$pesquisando] . ' ';
		}
	?>

</body>
</html>