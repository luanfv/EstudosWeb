<?php
$nome = '';
$cidade = '';

if(isset($_REQUEST['nome'])){
	$nome = $_REQUEST['nome'];
	if(strlen($nome) == 0){
		echo 'Nome é OBRIGATORIO<br>';
	}
}

if(isset($_REQUEST['city'])){
	$cidade = $_REQUEST['city'];
	if(strlen($cidade) == 0){
		echo 'Cidade é OBRIGATORIO<br>';
	}
}

if(isset($_REQUEST['nome']) && isset($_REQUEST['city'])){
	if(strlen($cidade) > 0 && strlen($nome) > 0)
		echo 'TUDO OK';
}


?>

<form>
	<table>
		<tr>
			<td>
				Nome:
			</td>
			<td>
				<input type="text" name="nome" value="<?= $nome ?>">
			</td>
		</tr>

		<tr>
			<td>
				Cidade:
			</td>
			<td>
				<input type="text" name="city" value="<?= $cidade ?>">
			</td>
		</tr>

		<tr>
			<td colspan="2" align="left">
				<input type="submit" name="enviar" value="Enviar">
			</td>
		</tr>

	</table>
</form>