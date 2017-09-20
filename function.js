//FUNÇÃO LETRA MAIUSCULA
function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    }
//FUNÇÃO SOMENTE LETRA
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    if (tecla==8 || tecla==0) return true;
else  return false;
    }
}
//FUNÇÃO FORMATAR VALOR EM DINHEIRO
function formataValor(campo) {
campo.value = filtraCampo(campo);
vr = campo.value;
tam = vr.length;
if ( tam <= 2 ){
  campo.value = vr ; }
  if ( (tam > 2) && (tam <= 5) ){
  campo.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
  if ( (tam >= 6) && (tam <= 8) ){
  campo.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
  if ( (tam >= 9) && (tam <= 11) ){
  campo.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
  if ( (tam >= 12) && (tam <= 14) ){
  campo.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
  if ( (tam >= 15) && (tam <= 18) ){
  campo.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
}

//FUNÇÃO FILTRO
function filtraCampo(campo){
var s = "";
var cp = "";
var CaracValidos = /[-0123456789]/;
vr = campo.value;
tam = vr.length;
for (i = 0; i < tam ; i++) {
if(CaracValidos.test(vr.substring(i,i+1))){
s = s + vr.substring(i,i + 1);}
}
campo.value = s;
   return cp = campo.value;
}

//FUNÇÃO LIMPAR
function limparCampo(){
if(document.getElementById("idcodMercadoria").value!="")
{
document.getElementById("idcodMercadoria").value="";
document.getElementById("idtipoMercadoria").value="";
document.getElementById("idnomeMercadoria").value="";
document.getElementById("idquantidadeMercadoria").value="";
document.getElementById("idprecoMercadoria").value="";
}
}

//FUNÇÃO MOUSE SOBRE
function mouseSobrecodMercadoria()
{
document.getElementById("idcodMercadoria").select();
}
function mouseSobretipoMercadoria()
{
document.getElementById("idtipoMercadoria").select();
}
function mouseSobrenomeMercadoria()
{
document.getElementById("idnomeMercadoria").select();
}
function mouseSobrequantidadeMercadoria()
{
document.getElementById("idquantidadeMercadoria").select();
}
function mouseSobreprecoMercadoria()
{
document.getElementById("idprecoMercadoria").select();
}

//FUNÇÃO GRAVAR NA MEMORIA VIRTUAL
function salvarParaJavaScript()
{
var codMercadoria = document.getElementById("idcodMercadoria").value;
var tipoMercadoria = document.getElementById("idtipoMercadoria").value;
var nomeMercadoria = document.getElementById("idnomeMercadoria").value;
var quantidadeMercadoria = document.getElementById("idquantidadeMercadoria").value;
var precoMercadoria = document.getElementById("idprecoMercadoria").value;
var tipoNegocio = document.getElementById("idtipoNegocio").value;

totals =0;
//FUNÇÃO COLOCAR AS VARIAVEIS DENTRO DE UM ARRAY
var itens = [];
itens.push(codMercadoria, tipoMercadoria, nomeMercadoria, quantidadeMercadoria, precoMercadoria, tipoNegocio);
totals++
tbl = document.getElementById("grid");

var novaLinha = tbl.insertRow(-1);
var novaCelula;

if(totals%2==0) cl = "#FFFFFF";
else cl = "##FFFFFF";

novaCelula = novaLinha.insertCell(0);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = codMercadoria;
totals;

novaCelula = novaLinha.insertCell(1);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = tipoMercadoria;

novaCelula = novaLinha.insertCell(2);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = nomeMercadoria;

novaCelula = novaLinha.insertCell(3);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = quantidadeMercadoria;

novaCelula = novaLinha.insertCell(4);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = precoMercadoria;

novaCelula = novaLinha.insertCell(5);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
novaCelula.innerHTML = tipoNegocio;

novaCelula2 = novaLinha.insertCell(6);
novaCelula.align = "left";
novaCelula.style.backgroundColor = cl;
var btnEl = document.createElement('input');
btnEl.setAttribute('type', 'button');
btnEl.setAttribute('class', 'btn');
btnEl.onclick = function () {deleteRow(this.parentNode.parentNode.rowIndex)};
btnEl.setAttribute('value', 'Delete');
novaCelula2.appendChild(btnEl); 

}
function deleteRow(i)
{
document.getElementById('grid').deleteRow(i)
}
//Função de teste para ver se esta pegando o array
function pedido(){
alert(itens);
}
