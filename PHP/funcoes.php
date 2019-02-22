<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Funções
	</title>
</head>
<body>
	<?php
		function boasVindas(){
			echo 'Seja bem-vindo(a)<br>';
		}

		function testeIdadePeso($i , $p){
			if($i >= 16 && $i <= 69 && $p >= 50){
				echo 'Atende aos requisitos';
			}
			else{
				echo 'Não atende aos requisitos<br>';
			}
		}

		function fimPrograma(){
			return 'Fim do programa';
		}

		$idade = 16;
		$peso = 40;

		boasVindas();

		testeIdadePeso($idade, $peso);

		$fim = fimPrograma();

		echo $fim;
	?>


</body>
</html>