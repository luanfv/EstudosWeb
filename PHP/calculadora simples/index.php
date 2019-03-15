<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="estilo.css">
	<meta charset="utf-8">
	<title>
		Calculadora
	</title>
</head>
<body>
	<?php 
		include("logico.php");
	?>

	<div class="principal">
		<h1>Calculadora Simples</h1>
		<form class="form" method="post">
			<table>
				<tr>
					<td>
						Primeiro número:
					</td>
					<td class="boton">
						<input type="number" name="n1" value="<?= $n1 ?>">
					</td>
				</tr>

				<tr>
					<td>
						Segundo número:
					</td>
					<td class="boton">
						<input type="number" name="n2" value="<?= $n2 ?>">
					</td>	
				</tr>
			</table>

			<br><br>

			<table>
				<tr>
					<td class="boton">
						<input type="submit" name="soma" value="Soma"> 
					</td>
					<td class="boton">
						<input type="submit" name="sub" value="Subtração"> 
					</td>
					<td class="boton">
						<input type="submit" name="divisao" value="Divisão">
					</td>
					<td class="boton">
						<input type="submit" name="mult" value="Multiplicação"> 
					</td>
				</tr>
			</table>
		</form>

		<h2>Resultado: <?= $resultado ?></h2>
	</div>

</body>
</html>