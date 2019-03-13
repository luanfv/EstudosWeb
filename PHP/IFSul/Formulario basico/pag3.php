<?php include("form.php") ?>
<div>
	<h1>
	ENVIE UMA MENSAGEM PARA NÓS
</h1>

<form method="post">
	<table class="padding">
		<tr>
			<td>
				Nome:
			</td>
			<td>
				<input type="text" name="nome" value="<?= $nome ?>">
			</td>
			<td class="erro">
				<?= $erroNome ?>
			</td>
		</tr>

		<tr>
			<td>
				E-mail:
			</td>
			<td>
				<input type="email" name="email" value="<?= $email ?>">
			</td>
			<td class="erro">
				<?= $erroEmail ?>
			</td>
		</tr>

		<tr>
			<td>
				Assunto:
			</td>
			<td>
				<select name="assunto">
					<option value="elogios">
						Elogios
					</option>
					<option value="sugestoes">
						Sugestões
					</option>
					<option value="reclamacoes">
						Reclamações
					</option>
					<option value="outros">
						Outros
					</option>
				</select>
			</td>
		</tr>

		<tr>
			<td colspan="2">
				<textarea name="msg" cols="30" rows="5" value="<?= $msg ?>"></textarea>
			</td>
			<td class="erro">
				<?= $erroMsg ?>	
			</td>
		</tr>

		<tr>
			<td colspan="2" align="right">
				<input type="submit" value="Enviar">
			</td>
		</tr>
	</table>
</form>
</div>
<h3>
	<?= $confirmacao ?>
</h3>