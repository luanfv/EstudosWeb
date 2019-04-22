<?php include('produtos.php'); include('sair.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>
		LOGADO
	</title>
</head>
<body>
	Seja bem-vindo, login feito com sucesso!

	<br><br>

	<form action="cadastro_produto.php">
		<input type="submit" value="Cadastrar produto">
	</form>

	<table>

		<tr>
			<th>
				Produtos
			</th>
		</tr>

		<tr>
			<td>
				<?= $nome; ?>
			</td>
		</tr>

		<tr>
			<td>
				<?= $quantidade; ?>
			</td>
		</tr>

	</table>
</body>
</html>