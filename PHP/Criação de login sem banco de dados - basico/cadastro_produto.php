<?php

	include('sair.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>
		Cadastro de produto	
	</title>
</head>
<body>
	<form action="logado.php">
		
		<table>
			<tr>
				<td>
					Nome do produto
				</td>
			</tr>

			<tr>
				<td>
					<input type="text" name="nome">
				</td>
			</tr>

			<tr>
				<td>
					Quantidade
				</td>
			</tr>

			<tr>
				<td>
					<input type="number" name="quantidade">
				</td>
			</tr>

			<tr>
				<td>
					<input type="submit" value="Cadastrar">
				</td>
			</tr>

		</table>

	</form>
</body>
</html>