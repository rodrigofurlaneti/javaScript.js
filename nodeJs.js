(function (){
	var arr = [];
	function something(){
		console.log(arr);
	}
	arr.push(1);
	arr.push(2);
	something();
})();

var out = 'May 25, 1977';
let out2 = 'Jun 20, 1980';
if(true){
	var out = 'May 25, 1983';
	let out2 = 'May 19, 1999';
}
out;
out2;

(function (){
	var princess = 'Leia';
	console.log(princess);
})();
console.log(princess);

StromtropperController.getAll.bind(StromtropperController);

function sith(){
	console.log(this);
}

var lordSith = sith.bind('Darth Bane');

lordSith();

var lords = sith.bind(19);

sith.call({  name: "Darth Maul"});

sith.apply({ name: "Darth Vander"});

var studios = ['20th Century Fox', 'Warner Bros', 'Walt Disney Pictures'];

studios.map(function(s){
	return s.length;
});

studios.map(s => s.length);

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


var BattleDroid = {};
BattleDroid.attack = function(){};

'42' == 42
//true
'42' === 42
//false
!!''
//false
!!'a'
//true
var one = 1;
//undefined
one = one + 1;
//2
one += 1;
//3
var noTry = false ? 'do' : 'do not';
//undefined
noTry
//"do not"

var noTry = false ? 'do' : 'do not';
//undefined
noTry
//"do not"
var noTry = false || 'do not';
//undefined
noTry
//"do not"
var noTry;
//undefined
if (false){noTry = 'do';}else{ noTry = 'do not';}
//"do not"
// LAÇO FOR
var arr = [1,2,3,4,5,7,11];
//undefined
for(var i=0, max=arr.length; i<max; i++){console.log(arr[i]);}
//VM513:1 1
//VM513:1 2
//VM513:1 3
//VM513:1 4
//VM513:1 5
//VM513:1 7
//VM513:1 11
//undefined
//LAÇO WHILE
var arr = [1,2,3,4,5,7,11];
//undefined
var i = 0;
//undefined
var max = arr.length;
//undefined
while(i<max){
	console.log(arr[i]);
	i++;}
//VM647:1 1
//VM647:1 2
//VM647:1 3
//VM647:1 4
//VM647:1 5
//VM647:1 7
//VM647:1 11
//6
var arr = [1,2,3,4,5,7,11];
//undefined
arr.map(function(x){
	console.log(x);
});
//VM766:1 1
//VM766:1 2
//VM766:1 3
//VM766:1 4
//VM766:1 5
//VM766:1 7
//VM766:1 11
//(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
