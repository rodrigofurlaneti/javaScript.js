/*
ELABORAR UM FORMULÁRIO PARA O USUÁRIO DIGITAR QUANTAS FRUTAS ELE QUER INSERIR DENTRO DE UM ARRAY;

CRIAR UM SCRIPT PARA GERAR A QUANTIDADE DE INPUTS NECESSÁRIOS PARA CAPTURAR OS NOMES DAS FRUTAS QUE ELE QUER INSERIR NO ARRAY
OBS: CADA INPUT DEVE TER UM ID SEQUANCIAL EX: FT01, FT02
;

APÓS ELE INSERIR TODAS AS FRUTAS, ADICIONE OS VALORES DENTRO DO ARRAY, UTILIZANDO O LAÇO FOR;

EXIBIR O ARRAY NO CONSOLE;

	<label>
		Fruta 1: <input type="text" id="ft1">
	</label><br>

*/

document.getElementById("btnCriar")
	.addEventListener("click", criarInputs);

arrayFrutas = [];
qtdFrutas  = 0;

function criarInputs(){
	qtdFrutas = document.getElementById("qtdFrutas").value;//3
	inputs = "";

	for( var i = 0; i <qtdFrutas; i++){
		inputs += '<label>';
		inputs += 'Fruta '+(i+1)+': <input type="text" id="ft'+i+'">';
		inputs += '</label><br>';
	}

	inputs += '<button id="cadastrar">Cadastrar</button>';
	document.getElementById("inputsDeFrutas").innerHTML = inputs;
	document.getElementById("cadastrar")
			.addEventListener("click", cadastrarNoArray);
}

//cadastrar as frutas no array
function cadastrarNoArray(){
	for(var i = 0; i < qtdFrutas; i++){
		idCampo = "ft"+i;
		arrayFrutas[i] = document.getElementById(idCampo).value;
	}

	console.log(arrayFrutas);
}
