//Objeto

function Droid(){}
var r2d2 = new Droid();
r2d2

//JSON

var BattleDroid = {};
BattleDroid


function Droid(){};
var c3po = new Droid();
Droid.prototype.getLanguages = function (){
	return this.languages;
};
Droid.prototype.setLanguages = function (n){
	this.languages = n;
};
c3po.setLanguages(6000000);
c3po.getLanguages();

var r2d2 = new Droid();
r2d2.setLanguages(1);
r2d2.getLanguages();

function BattleDroid(){};
BattleDroid.prototype = Object.create(Droid.prototype);
var b1 = new BattleDroid();
b1.setLanguages(1);
b1.getLanguages();
