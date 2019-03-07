<?php 
	$nome = '';
	$email = '';
	$assunto = '';
	$msg = '';

	$confirmacao = '';

	$erroNome = '';
	$erroEmail = '';
	$erroMsg = '';


	if(isset($_REQUEST['nome'])){
		$nome = $_REQUEST['nome'];
		if(strlen($nome) == 0)
			$erroNome = 'NECESSARIO INFORMAR O NOME';
	}

	if(isset($_REQUEST['email'])){
		$email = $_REQUEST['email'];
		if(strlen($email) == 0)
			$erroEmail = 'NECESSARIO INFORMAR O E-MAIL';
	}

	if(isset($_REQUEST['nome'])){
		$assunto = $_REQUEST['assunto'];
	}

	if(isset($_REQUEST['msg'])){
		$msg = $_REQUEST['msg'];
		if(strlen($msg) == 0)
			$erroMsg = 'NECESSARIO INFORMAR UMA MENSAGEM';
	}

	if(isset($_REQUEST['nome']) && isset($_REQUEST['email']) && isset($_REQUEST['msg'])){
		if (strlen($nome) > 0 && strlen($email) > 0 && strlen($msg) > 0){
				$confirmacao = 'Olá '. $nome . ' sua mensagem foi enviada com sucesso, e-mail para contato no foi "' . $email . '" sobre o assunto "' . $assunto . '" que diz "' . $msg . '", agradecemos pela colaboração';
		}
	}
 ?>