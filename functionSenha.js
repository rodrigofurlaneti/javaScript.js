document.getElementById("validar")
		.addEventListener("click", validarSenha);


function validarSenha(){
	
	senhaCorreta = "123";
	
	chances = 3;
	cont = 1;
	qtdChances = chances;

	do {
		senhaUsuario = prompt("Digite a senha para ser validada");
		
		if (senhaUsuario == senhaCorreta) {
			sitaucao = "Senha Correta - Você acertou a senha na "+cont+"a chance";
			alert(sitaucao);
			
			cont = 4; 
		} else {
			qtdChances = chances - cont;
			sitaucao = "Senha Inválida - você tem apneas "+qtdChances+" chance(s)";
			alert(sitaucao);
			cont++;
		}
		
	} while( cont <= chances );

}
