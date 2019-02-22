<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>
		Datas
	</title>
</head>
<body>
	<?php
		//DATA
		echo date("d/m/y");

		echo "<br>";

		echo date("D M Y");

		echo "<br>";

		//HORA
		echo date("h:i");

		echo "<br>";

		echo date("H:i:s");

		//Local de onde esta sendo usado como base para data e hora
		echo "<br>";

		echo date_default_timezone_get();

		echo "<hr>";

		//Muda o local do timezone (horario e data base)
		date_default_timezone_set('America/Toronto');

		//

		echo "<br>";

		echo date("d/m/y");

		echo "<br>";

		echo date("D M Y");

		echo "<br>";

		//HORA
		echo date("h:i");

		echo "<br>";

		echo date("H:i:s");

		//Local de onde esta sendo usado como base para data e hora
		echo "<br>";

		echo date_default_timezone_get();

		echo "<br><br>";
	?>

	<?php
		date_default_timezone_set('America/Sao_Paulo');

		//Calculo com datas
		//Tem que ser usado o padrão americano

		$dataAtual = date('Y-m-d');
		$dataFuturo = '2019-04-09';

		echo '<hr>Dia um: ' . $dataAtual . '<br>Dia dois: ' . $dataFuturo . '<br>';

		$dataAtual = strtotime($dataAtual);
		$dataFuturo = strtotime($dataFuturo);

		echo '<br>SEGUNDOS<br>Dia um: ' . $dataAtual . '<br>Dia dois: ' . $dataFuturo . '<br>';

		$tempoDia = 24 * 60 * 60;

		echo 'Um dia possui: ' . $tempoDia;

		$resultado = $dataFuturo - $dataAtual;
		$resultado /= $tempoDia;

		echo '<br>Distancia entre dias dessas datas é ' . $resultado;
	?>

</body>
</html>