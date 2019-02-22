<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Funções - Imposto de renda
	</title>
</head>
<body>
	<?php
		function impostoDeRenda($renda){
			$imposto;

			if($renda <= 1903.98){
				$imposto = 0;
			}
			else if($renda <= 2826.65){
				$imposto = $renda * 0.075;
			}
			else if($renda <= 3751.05){
				$imposto = $renda * 0.15;
			}
			else if($renda <= 4664.68){
				$imposto = $renda * 0.225;
			}
			else{
				$imposto = $renda * 0.275;
			}

			return $imposto;
		}

		$salario = 6000.00;
		echo 'Salario bruto: ' . $salario;
		$imposto = impostoDeRenda($salario);
		$salario -= $imposto;

		echo '<br>Imposto: ' . $imposto . '<br>Salario liquido: ' . $salario; 
	?>


</body>
</html>