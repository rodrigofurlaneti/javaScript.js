var fs = require('fs');
console.log('asy before');
fs.readFile('./file/file.pdf', function(err, data){
  if (err){
    throw err;
  }
  console.log('asy executed');
});
console.log('asy after');
console.log('sy before');
var data = fs.readFileSync('.file/file.pdf');
console.log(data, 'sy executed');
console.log('sy after');
