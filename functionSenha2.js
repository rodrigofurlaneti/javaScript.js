document.getElementById("validar")
		.addEventListener("click", validarSenha);


function validarSenha(){
	
	senhaCorreta = document.getElementById("senha").value;
	
	chances = 3;
	cont = 1;
	qtdChances = chances;

	while( cont <= chances ){
		
		senhaUsuario = prompt("Digite a senha para ser validada");
		
		if (senhaUsuario == senhaCorreta) {
			sitaucao = "Senha Correta";
			document.getElementById("resultado")
				.innerHTML = "Você acertou a senha na "+cont+"a chance";
			cont = 4; 
		} else {
			qtdChances = chances - cont;
			sitaucao = "Senha Inválida - você tem apneas "+qtdChances+" chance(s)";
			cont++;
		}
		
		//informa a resposta
		alert(sitaucao);
	}
	


	//document.getElementById("senha")
			//.setAttribute("disabled","disabled");


}
