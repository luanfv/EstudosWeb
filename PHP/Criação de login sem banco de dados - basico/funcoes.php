<?php 
	

	function add_post($post){
		$texto = implode('_._', $post) . PHP_EOL;

		$arquivo = fopen('arquivo.txt', 'a');

		fwrite($arquivo, $texto);
		fclose($arquivo);

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

		<!DOCTYPE html>
		<html>
		<head>
			<title>
				
			</title>
			<link rel="stylesheet" type="text/css" href="home.css">
		</head>
		<body>

			<div id="menu">
				<a id="logar" href="login.php">Logar</a>
				<div id="layout">
					<a class="layouts" href="home.php">Home</a>
					<a class="layouts" href="">Sobre nós</a>
					<a class="layouts" href="">Fale conosco</a>
				</div>
				
			</div>

		<?php
		for($i = 0; $i < count($postagens) - 1;$i++){

		?>

			<div id="conteudo">
				<div class="titulo">

					<?php

						echo $postagens[$i][0];

					?>
				</div>

				<div class="post">
					
					<?php

						echo $postagens[$i][1];

					?>
				</div>

			</div>

		<?php } ?>

			<div id="rodape">
				<div id="desenvolvedor">Desenvolvido por: <a href="https://github.com/Luanfv">Luan França Vieira</a></div>
				<a href="home.php" class="homeRodape">HOME</a>
				<a href="login.php" class="homeRodape">LOGAR</a>
			</div>

		</body>
		</html>

		<?php

		fclose($arquivo);
	}

?>