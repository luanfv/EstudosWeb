<?php 
	session_start();

	if($_SESSION['logado'] == 'sim')
		header('location: index.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>
		
	</title>
</head>
<body>
	<a href="home.php">Voltar para HOME</a>

	<form action="verifica_login.php" method="post">
		<table>

			<tr>
				<td>
					Login
				</td>
			</tr>

			<tr>
				<td>
					<input type="text" name="login">
				</td>
			</tr>

			<tr>
				<td>
					Senha
				</td>
			</tr>

			<tr>
				<td>
					<input type="password" name="senha">
				</td>
			</tr>

			<tr>
				<td>
					<input type="submit" value="Entrar">
				</td>
			</tr>

		</table>
	</form>

</body>
</html>