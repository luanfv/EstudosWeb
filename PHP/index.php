
<html>
<head>
	<meta charset="utf-8">
	<title>
		Variaveis
	</title>
</head>
<body>

	<?php
		$nome = "Luan";
		$idade = "18";
		$peso = 60.3;
		$fumante = false;
	?>
	<p>Nome: <?= $nome ?></p>
	<p>Idade: <?= $idade ?></p>
	<p>Peso: <?= $peso ?></p>
	<p>Fumante: 
		<?php if($fumante == true){
				$fumanteSN = "Sim";
			} 
			else{
				$fumanteSN = "Não";
			}
		?>
		<?= $fumanteSN ?>
	</p>
</body>
</html>