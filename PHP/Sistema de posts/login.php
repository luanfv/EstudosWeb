<?php 
	session_start();

	if($_SESSION['logado'] == 'sim')
		header('location: index.php');

?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="login.css">
	<title>
		Login
	</title>
</head>
<body>

	<a id="link" href="home.php">Voltar</a>

	<div id="principal">

		<div>

			<form action="verifica_login.php">
				<table id="tabela">

					<tr>
						<td>
							<div id="conect">
								Conecte-se
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<input class="login" type="text" name="login" placeholder="Digite seu login">
						</td>
					</tr>

					<tr>
						<td>
							<input class="login" type="password" name="senha" placeholder="Digite sua senha">
						</td>
					</tr>

					<tr>
						<td>
							<input id="botao" type="submit" value="Entrar">
						</td>
					</tr>
				</table>
				

			</form>
		</div>


	</div>


</body>
</html>