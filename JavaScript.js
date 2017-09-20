function imprimir(aluno,mediaFinal){
	alert("Aluno(a) "+aluno+" teve media final "+mediaFinal);
}
function calculaPrimeiraMedia(nota){
	return nota * 0.6;
}
function calculaSegundaMedia(nota){
	return nota * 0.4;
}



var alunos = ["João da Silva","Maria da Silva"],
	notas = [
		[7,6],[8,9]
	],
	medias = [
		[ calculaPrimeiraMedia(notas[0][0]),calculaSegundaMedia(notas[0][1])],
		[ calculaPrimeiraMedia(notas[1][0]),calculaSegundaMedia(notas[1][1])]
	]
	mediasFinais = [
		medias[0][0] + medias[0][1],
		medias[1][0] + medias[1][1]
	]
	
imprimir(alunos[0],mediasFinais[0],"alalalalalala");
imprimir(alunos[1],mediasFinais[1]);
