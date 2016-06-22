/*
* myboilerplate.js
*
* Clona o projeto git@github.com:rogeralbinoi/myboilerplate.git
* e remove .git do projeto novo
*
* criado para estudo sobre nodejs
*
* Roger Albino, junho de 2016
*/
var exec = require('child_process').exec;
const USAGE = 'Uso: myboilerplate nome-do-projeto';
var projectName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi,'');

if(!projectName) {
  return console.log(USAGE);
}

var scriptClone = `git clone git@github.com:rogeralbinoi/myboilerplate.git ${projectName} && cd ${projectName} && rm -rf .git && cd ../`;

exec(scriptClone, function (error, stdout, stderr) {
  console.log(`projeto criado em ${projectName}`);
  if (error !== null) {
    console.log(`error: ${error}`);
  }
});
