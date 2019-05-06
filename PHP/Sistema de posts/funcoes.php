<?php 
	

	function menu(){
		?>
		<body>

			<div id="menu">
				
				<input id="pesquisa" type="text" placeholder="Pesquise um post" name="pesquisa">
				<input id="botaoPesquisa" type="submit" value="Pequisar">

				<?php

					if(isset($_SESSION['logado']) && $_SESSION['logado'] == 'sim'){
						?>

							<a class="navegacao" href="deslogado.php">SAIR</a>
						<?php
					}

				?>

				<a class="navegacao" href="login.php" >LOGIN</a>
				<a class="navegacao" href="" >SOBRE</a>
				<a class="navegacao" href="home.php" >HOME</a>
			</div>
		<?php 
	}

	function mostrar_posts(){
		$arquivo = fopen('arquivo.txt', 'r');
		$postagens[] = null;
		$i = 0;

		while (!feof($arquivo)) {
			$msg = fgets($arquivo);

			$postagens[$i] = $msg;

			$postagens[$i] = explode('_._', $postagens[$i]);
			$i++;
		}

		?>

		<div id="main">

		<?php
		for($i = 0; $i < count($postagens) - 1;$i++){

		?>

			<div class="post">
				<div class="titulo">

					<?php

						echo $postagens[$i][0];

					?>
				</div>

				<div class="descricao">
					
					<?php

						echo $postagens[$i][1];

					?>
				</div>

			</div>

		</div>

		<?php 
		}

		fclose($arquivo);
	}

	function cadastro(){?>
			<div id="cadastro">
				<div id="cadastroConteudo">
					<form action="post.php" method="post">
						<table id="cadastroTabela">

							<th id="cadastre">
								
									CADASTRE UM POST
								
							</th>

							<tr>
								<td class="espacamento">
									
								</td>
							</tr>

							<tr>
								<td class="cadastroTitulo">
									Titulo
								</td>
							</tr>

							<tr>
								<td>
									<input class="informcaoes" type="text" name="titulo">
								</td>
							</tr>

							<tr>
								<td class="espacamento">
									
								</td>
							</tr>

							<tr>
								<td class="cadastroTitulo">
									Conteudo
								</td>
							</tr>

							<tr>
								<td>
									<textarea class="informcaoes" cols="60" rows="20" name="descricao"></textarea>
								</td>
							</tr>

							<tr>
								<td class="espacamento">
									
								</td>
							</tr>

							<tr>
								<td>
									<input id="btnCadastro" type="submit" value="Publicar">
								</td>
							</tr>

						</table>
					</form>
				</div>
			</div>
	<?php
	}

	function rodape(){
	?>

		<div id="rodape">
			<div id="msgRodape">
				<div class="conteudoRodape">
					Desenvolvido por: <a href="https://github.com/Luanfv">Luan França Vieira</a>
				</div>

				<div class="conteudoRodape">
					Situação: 
					<?php 

					
						if($_SESSION['logado'] == 'sim'){
							echo "Logado";
						}
						else{
							echo "Deslogado";
						}
					?>
				</div>

			</div>
		</div>

	<?php
	}

	function add_post($post){
		$texto = implode('_._', $post) . PHP_EOL;

		$arquivo = fopen('arquivo.txt', 'a');

		fwrite($arquivo, $texto);
		fclose($arquivo);

	}

	

?>