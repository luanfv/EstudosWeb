<?php
	session_start();
	$_SESSION['logado'] = 'nao';
?>

<!DOCTYPE html>
<html>
<head>
	<title>
		Menu de login
	</title>
</head>
<body>
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