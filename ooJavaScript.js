var x = [1,2,3]
var y = [10,20,30]
var z = [100,200,300]
function media(par){
	par[0] + par[1] + par[2] /	3;
}
var x = [1,2,3, "medianormal"]
var y = [10,20,30, "medianormal"]
var z = [100,200,300, , "mediaponderada"]
function media(par){
	if (par[3] == "medianormal")
	return (par[0] + par[1] + par[2] /	3);

	if (par[3] == "mediapoderada")
	return (par[0] + par[1] + 2*par[2] / 4);


}

function elemento(x1, x2, x3){
	this.x = [x1,x2,x3];
	this.media = function(){
			return (this.x[0] + this.x[1] + this.x[2]) / 3;
	}
}

a1 = new elemento (1,2,3);
a1.media()
//retorno 2

function elemento2(x1, x2, x3){
	this.x = [x1,x2,x3];
	this.media = function(){
			return (this.x[0] + this.x[1] + 2*this.x[2]) / 4;
	}
}

a3 = new elemento2 (100,200,300);
a3.media()
//retorno 225

function media(par){
	return par.media();
}

media(a1)
//retorno 2

media(a3)
//retorno 225


