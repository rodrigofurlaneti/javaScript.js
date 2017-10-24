var fs = require('fs');
console.log('assy before');
fs.readFile('./file/file.pdf', function(err, data){
  if (err){
    throw err;
  }
  console.log('assy executed');
})
console.log('assy after');
